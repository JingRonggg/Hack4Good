import React from "react";
import { CSSProperties } from "react";
import checkAccepted from "functions/Task/check-accepted";

const DetailedTask = () => {
    const users = ["user1", "user2"];
    const isAccepted = checkAccepted(users, "user2");

    return (
        <div style={styles.pageContainer}>
            <div style={styles.scrollableContent}>
                <div style={styles.card}>
                    <div style={styles.content}>
                        <text style={styles.title}>Complete Math Homework</text>
                        <p style={styles.subtitle}>Complete by 30 Jan 2025</p>
                        <div style={styles.reward}>
                            <span style={styles.points}>+500 Points</span>
                        </div>
                    </div>
                </div>
                <div style={styles.descriptionContainer}>
                    <p>Task Description:</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
            <div style={styles.fixedButtonContainer}>
                {isAccepted ? (
                    <>
                        <button style={styles.button}>Mark as Completed</button>
                        <button style={{ ...styles.button, ...styles.secondaryButton }}>
                            Leave Task
                        </button>
                    </>
                ) : (
                    <button style={styles.button}>Accept Task</button>
                )}
            </div>
        </div>
    );
};

const styles: { [key: string]: CSSProperties } = {
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
    },
    scrollableContent: {
        flex: 1,
        overflowY: "auto",
        padding: "12px",
        width: "100%",
    },
    card: {
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "12px",
        paddingRight: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginBottom: "20px",
        textAlign: "center",
    },
    content: {
        display: "flex",
        flexDirection: "column" as "column",
        width: "100%",
    },
    title: {
        fontSize: "25px",
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: "15px",
        color: "#777",
    },
    reward: {
        backgroundColor: "#f0f0f0",
        padding: "6px 12px",
        alignItems: "center",
    },
    points: {
        fontSize: "15px",
        fontWeight: "bold",
    },
    fixedButtonContainer: {
        position: "fixed",
        bottom: "56px",
        left: 0,
        right: 0,
        padding: "12px",
        backgroundColor: "#fff",
        zIndex: 10,
        display: "flex",
        gap: "12px",
    },
    button: {
        backgroundColor: "black",
        color: "white",
        padding: "12px 16px",
        borderRadius: "8px",
        cursor: "pointer",
        border: "none",
        fontSize: "15px",
        flex: 1,
    },
    secondaryButton: {
        backgroundColor: "gray",
    },
    descriptionContainer: {
        marginTop: "20px",
    },
};

export default DetailedTask;
