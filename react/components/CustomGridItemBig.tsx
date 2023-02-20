import React, { ReactNode } from "react";
import styles from './styles.css'

type Props = { element: ReactNode }

const CustomGridItemBig = ({ element }: Props) => {
  return (
    <div className={styles["custom-grid-item-big"]}>
      {element}
    </div>
  );
}

export default CustomGridItemBig;

