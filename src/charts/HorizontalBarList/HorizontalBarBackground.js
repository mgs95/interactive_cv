import React from 'react';
import { connect } from 'react-redux';
import { select } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { axisTop } from "d3-axis";
import './index.css';

const COLORS = ['#CACACA', '#909090', '#A9A9A9'];

class HorizontalBarBackground extends React.Component {
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

    let { width, height } = this.props;

    const node = this.node;

    const g = select(node).append('g').attr('transform', 'translate(0, 18)');
    const x = scaleLinear()
      .range([0, width])
      .domain([0, 100]);

    const xAxis = axisTop()
      .scale(x)
      .tickSize(0);
    g.append("g")
      .attr("class", "x axis")
      .style('color', 'var(--color-gray-1)')
      .call(xAxis);

    const data = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90].reverse();

    const bars = g.selectAll(".bar")
      .data(data)
      .enter()
      .append("g");

    bars.append("rect")
      .attr("y", 0)
      .attr("height", height)
      .attr("x", d => x(d))
      .attr('fill', d => {
        if (d < 30) {
          return COLORS[0];
        } else if (d > 70) {
          return COLORS[1];
        } else {
          return COLORS[2];
        }
      })
      .attr("width", x(10));
    bars.append("rect")
      .attr("class", "backgroundBar")
      .attr("y", 0)
      .attr("height", height)
      .attr("x", d => x(d + 10))
      .attr("width", 1);

    select(node).select('.axis').select('.tick').remove();
    select(node).select('.x.axis').selectAll('.tick')
      .attr("transform", d => "translate(" + (x(d) - 6) + ",-7)");
  }

  render() {
    return (
      <div className={'HorizontalBarBackgroundContainer'}>
        <svg
          height={this.props.height}
          ref={node => this.node = node}
          width={this.props.width + 15}
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

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalBarBackground);
