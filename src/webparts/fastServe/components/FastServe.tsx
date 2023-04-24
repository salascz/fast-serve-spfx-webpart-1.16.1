import * as React from 'react';
import styles from './FastServe.module.scss';
import { IFastServeProps } from './IFastServeProps';

export default class FastServe extends React.Component<IFastServeProps, {}> {
  public render(): React.ReactElement<IFastServeProps> {

    const clickHandler = (): void => {
      throw new Error('Error on click');
    }

    return (
      <section className={styles.fastServe}>
        <div className={styles.welcome}>
          <div className={styles.testStyle}>FAST Serve test 123</div>
          <button onClick={clickHandler}>test link</button>
        </div>
      </section>
    );
  }
}
