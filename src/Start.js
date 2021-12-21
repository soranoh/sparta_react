const Start = (props) => {
    return (
        <div className="container" style={container}>
            <div className="outter" style={outter}>
                <h1 style={h1}>
                    나는{" "}
                    <span style={title}>
                        {props.name}
                    </span>
                    에 대해 얼마나 알고 있을까?
                </h1>
                <input type="text" style={textInput} placeholder="이름" />
                <button style={startBtn}>Start</button>
            </div>
        </div>
    );
}

const container = {
    display: "flex",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    padding: "16px",
    boxSizing: "border-box"
}

const outter = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    padding: "0px 10vw",
    boxSizing: "border-box",
    maxWidth: "400px",
}

const h1 = {
    fontSize: "1.5m",
    margin: "0px",
    lineHeight: "1.4"
}

const title = {
    backgroundColor: "#fef5d4",
    padding: "5px 10px",
    borderRadius: "30px"
}

const textInput = {
    padding: "10px",
    margin: "24px 0px",
    border: "1px solid #dadafc",
    borderRadius: "30px",
    width: "100%"
}

const startBtn = {
    padding: "8px 24px",
    backgroundColor: "#dadafc",
    borderRadius: "30px",
    border: "#dadafc"
}

export default Start;