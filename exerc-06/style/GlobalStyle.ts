import { StyleSheet } from "react-native";

const primaryColor = "#00c200";
const secondaryColor = "#2ecc71";
const tertiaryColor = "#e74c3c";
const textColor = "#FFFFFF";
const borderColor = "#bdc3c7";
const backgroundColor = "#ecf0f1";
const shadowColor = "#95a5a6";

export const GlobalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        backgroundColor: primaryColor,
        paddingVertical: '13%',
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: textColor,
        textAlign: "center",
    },
});