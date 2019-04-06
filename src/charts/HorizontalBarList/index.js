import React from 'react';
import { connect } from 'react-redux';
import { select } from "d3-selection";
import { scaleLinear, scaleBand } from "d3-scale";
import { axisLeft, axisTop } from "d3-axis";
import './index.css';


// This is a d3-array function, but there is an error minifying it
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

class HorizontalBarList extends React.Component {
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

    let { width, height, data, color, first } = this.props;
    data = data.sort(function (a, b) {
        return ascending(a.score, b.score);
    });

    const node = this.node;

    const margin = {left: 60};
    const chartWidth = width - margin.left;

    select(node).attr("transform", "translate(0,-20)");
    const g = select(node).append('g')
      .attr("transform", "translate(" + margin.left + ",20)");

    const x = scaleLinear()
      .range([0, chartWidth])
      .domain([0, 100]);

    const y = scaleBand()
      .rangeRound([height, 0])
      .domain(data.map(d => d.name))
      .paddingInner(0.1);

    const xAxis = axisTop()
      .scale(x)
      .tickSize(0);
    const yAxis = axisLeft()
      .scale(y)
      .tickSize(0);

    if (!first) {
      g.append("g")
        .attr("class", "x axis")
        .style('color', 'var(--color-gray-1)')
        .call(xAxis);
    }
    g.append("g")
      .attr("class", "y axis")
      .style('color', 'var(--color-gray-1)')
      .call(yAxis);

    const bars = g.selectAll(".bar")
      .data(data)
      .enter()
      .append("g");

    bars.append("rect")
      .attr("class", "bar")
      .attr("y", d => y(d.name))
      .attr("height", y.bandwidth())
      .attr("x", 0)
      .attr('fill', color)
      .attr("width", d => x(d.score));

    select(node).selectAll('.tick').select('text')
      .classed('HorizontalBarChartLabel', true);

    select(node).selectAll('.axis').select('path').remove();
    select(node).select('.x.axis').selectAll('.tick')
      .attr("transform", d => "translate(" + (x(d) + 2) + ",-4)");
  }

  render() {
    return (
      <div style={{height: this.props.height}}>
        <svg
          height={this.props.height + 20}
          ref={node => this.node = node}
          width={this.props.width + 20}
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

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalBarList);
