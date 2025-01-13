import React from 'react';

const Bubble = () => {
    return(
        <div style={styles.button}>
            <text>300 points</text>
        </div>
    );
};

const styles = {
    button: {
      backgroundColor: "white",
      color: "black",
      padding: "8px 12px",
      borderRadius: "8px",
      border: "solid",
      fontSize: "15px",
      fontWeight: "bold",
      alignText: "center",
    }
};

export default Bubble