import React from 'react';
import { connect } from 'react-redux';
import { select } from 'd3-selection';
import { arc } from 'd3-shape';
import './index.css';


class CircleProgress extends React.Component {
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
    const realRadius = radius - 4;
    const border = 3;
    const strokeSpacing = 0;
    const boxSize = 2 * radius;

    //Define the circle
    const endAngle = Math.min(2 * Math.PI * data.progress / 100,
                              2 * Math.PI - 0.1);
    const circle = arc()
      .startAngle(0.1)
      .endAngle(endAngle)
      .innerRadius(realRadius)
      .outerRadius(realRadius -border);
    const circle2 = arc()
      .startAngle(-0.01)
      .endAngle(0.01)
      .innerRadius(realRadius)
      .outerRadius(realRadius - border);

    //setup SVG wrapper
    const svg = select(node)
      .append('svg')
      .attr('width', boxSize)
      .attr('height', boxSize);

    // ADD Group container
    const g = svg.append('g')
      .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

    //Setup track
    const track = g.append('g')
      .attr('class', 'radial-progress');
    track.append('path')
      .attr('class', 'radial-progress__background')
      .attr('stroke-width', strokeSpacing + 'px')
      .attr('d', circle2);
    //Add colour fill
    track.append('path')
      .attr('class', 'radial-progress__value')
      .attr('stroke-width', strokeSpacing + 'px')
      .attr('d', circle);

    //Add text value
    track.append('rect')
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("x", -17.5)
      .attr("y", -20.5)
      .attr("width", 35)
      .attr("height", 26)
      .style("fill", 'white');
    track.append('text')
      .attr('class', 'radial-progress__text')
      .style('font-size', 22)
      .style('font-weight', 500)
      .attr('text-anchor', 'middle')
      .attr('dy', '-0rem')
      .text(data.grade);

    track.append('rect')
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("x", -16.5)
      .attr("y", 9)
      .attr("width", 33)
      .attr("height", 15)
      .style("fill", 'white');
    track.append('text')
      .attr('class', 'radial-progress__text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.3rem')
      .text(data.progress + '%');
  }

  render() {
    const containerStyle = {
      height: this.props.side,
      width: this.props.side,
      backgroundImage: `url(${this.props.image}.png)`,
      overflow: 'hidden',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '60px'
    };

    return (
      <div className={'CircleProgressContainer'}
          style={containerStyle}
      >
        <svg
          height={this.props.side}
          ref={node => this.node = node}
          width={this.props.side}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(CircleProgress);
