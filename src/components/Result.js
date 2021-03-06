import React, { Component } from 'react';
import styles from './Result.module.css';


export default class Result extends Component {
  render() {
    const netOutput = this.props.netOutput;
    if (netOutput) {
      const assessment = netOutput.indexOf(Math.max(...netOutput));
      return (
        <div className={styles.container}>
          I think the result is {assessment}
          <div className={styles.details}>
            {netOutput.map((probability, index) => {
              return <div key={index}>{index}: {Math.floor(probability * 100)}%</div>
            })}
          </div>
        </div>
      );
    }
    return (
      <div className={styles.container}>
        Draw a digit
      </div>
    )
  }
}

