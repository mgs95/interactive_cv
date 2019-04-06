import React from 'react';
import { connect } from 'react-redux';
import { select } from 'd3-selection';
import { partition, hierarchy } from 'd3-hierarchy';
import { arc } from 'd3-shape';
import { color } from 'd3-color';
import { textwrap } from 'd3-textwrap';
import './index.css';

class Sunburst extends React.Component {
  componentDidMount() {
    this.createChart();
  }

  componentDidUpdate() {
    this.createChart();
  }

  /**
   * Removes previous chart
   */
  cleanChart() {
    select(this.node).selectAll('*').remove();
  }

  createChart() {
    this.cleanChart();

    const { side, data } = this.props;

    const node = this.node;

    const radius = side / 2;
    const colors = [color('#15A9Db'), color('#E29438'),
                    color('#7C7C7C'), color('#71D16F')];

    select(node)
      .attr('transform', 'translate(-' + side / 2 + ',-' + side/ 2 + ')');
    const g = select(node).append('g')
      .attr('transform', 'translate(' + side + ',' + side + ')');

    const partitionEl = partition()
      .size([2 * Math.PI, radius]);

    let idx = 0;
    let secondLayerColor = null;
    let thirdLayerColor = null;

    const root = hierarchy(data)
      .sum(function (d) { return d.size; })
      .sort(function (a, b) { return b.value - a.value; })
      .eachBefore(el => {
        switch (el.depth) {
          case 2:
            secondLayerColor = null;
            el.color = colors[idx];
            idx += 1;
            break;
          case 3:
            thirdLayerColor = null;
            if (secondLayerColor === null) {
              secondLayerColor = el.parent.color.brighter(0.5);
            } else {
              secondLayerColor = secondLayerColor.brighter(0.2);
            }
            el.color = secondLayerColor;
            break;
          case 4:
            if (thirdLayerColor === null) {
              thirdLayerColor = el.parent.parent.color.brighter(0.8);
            } else {
              thirdLayerColor = thirdLayerColor.brighter(0.2);
            }
            el.color = thirdLayerColor;
            break;
          default:
            break;
        }
      });

    partitionEl(root);
    const arcEl = arc()
        .startAngle(function (d) { d.x0s = d.x0; return d.x0; })
        .endAngle(function (d) { d.x1s = d.x1; return d.x1; })
        .innerRadius(function (d) { return d.y0; })
        .outerRadius(function (d) { return d.y1; });
    const pathEl = arc()
        .startAngle(function (d) { d.x0s = d.x0; return d.x0; })
        .endAngle(function (d) { d.x1s = d.x1; return d.x1; })
        .innerRadius(function (d) { return d.y0 + 10; })
        .outerRadius(function (d) { return d.y0 + 10; });

    const slice = g.selectAll('g.node')
      .data(root.descendants(), function(d) { return d.data.name; });
    const newSlice = slice.enter().append('g').attr("class", "node").merge(slice);
    slice.exit().remove();

    let i = 0;
    slice.selectAll('path').remove();
    newSlice.append('path')
      .attr("display", function (d) { return d.depth > 1 ? null : "none"; })
      .attr("d", arcEl)
      .style('stroke', '#fff')
      .style("fill", function (d) { return d.color; });
    newSlice.append('defs')
      .append('path')
      .attr("id", () => {
        i += 1;
        return "textPath-" + i;
      })
      .attr("d", pathEl);

    function computeTextRotation(d) {
      const angle = (d.x0 + d.x1) / Math.PI * 90 + 90;
      return (angle < 120 || angle > 270) ? angle : angle + 180;
    }
    function computeTextAlign(d) {
      const angle = (d.x0 + d.x1) / Math.PI * 90 + 90;
      return (angle < 120 || angle > 270) ? 'right' : 'left';
    }

    i = 0;
    slice.selectAll('text').remove();

    newSlice.append("text")
      .attr("text-anchor", "middle")
      .append("textPath")
      .attr("xlink:href", function(d) {
        i += 1;
        return "#textPath-" + i;
      })
      .attr('startOffset', '25%')
      .text(function(d) {
        switch (d.depth) {
          case 2:
            return d.value + '%';
          case 3:
            return d.data.name;
          case 4:
            return d.value + '%';
            //return d.data.name;
          default:
            break;
        }
      });
    const legendWrap = textwrap().bounds({height: 100, width: 80});
    const wrap = textwrap().bounds({height: 100, width: 53});
    newSlice.append('g')
      .attr("transform", function(d) {
        const c = arcEl.centroid(d),
          x = c[0],
          y = c[1],
          h = Math.sqrt(x*x + y*y);
        let ll = 159;
        const angle = (d.x0 + d.x1) / Math.PI * 90 + 90;
        ll += (angle < 120 || angle > 270) ? 53 : 0;
        return "translate(" + (x/h * ll) + "," + (y/h * ll) + ")rotate(" + computeTextRotation(d) + ")"; })
      .attr("font-size", "10px")
      .style('text-align', d => computeTextAlign(d))
      .attr('y', '30px')
      .append("text")
      .text(function(d) { return d.depth === 4 ? d.data.name : '';})
      .call(wrap);

    let cy = -50;
    const legendEls = g.selectAll('g.legend').data(data.children[0].children)
      .enter().append('g').classed('legend', true);
    legendEls.append('circle')
      .attr("cx", function (d) { return -38; })
      .attr("cy", function (d) {
        cy += 20;
        return cy;
      })
      .attr("r", function (d) { return 6; })
      .style("fill", function(d, idx) { return colors[idx]; });
    cy = -55;
    legendEls.append('g')
      .attr('font-size', '11px')
      .attr('font-weight', 500)
      .attr('transform', () => {
        cy += 20;
        return `translate(-24, ${cy})`;
      })
      .append('text')
      .text(d => d.name)
      .call(legendWrap);
  }

  render() {
    return (
      <svg
        height={this.props.side * 2}
        ref={node => this.node = node}
        width={this.props.side * 2}
      />
    );
  }
}

const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Sunburst);
