import React from "react";
import classes from "./Definitions.Module.css";

const Definition = (props) => {
  return (
    <div className={classes.meaning}>
      {props.meanings[0] && props.word && props.category === "en" && (
        <audio
          src={
            props.meanings[0].phonetics[0] &&
            props.meanings[0].phonetics[0].audio
          }
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          controls
        >
          Your Browser doesn't support audio element.
        </audio>
      )}
      {props.word === "" ? (
        <span className={classes.subTitle}>
          Start by typing a word in search
        </span>
      ) : (
        props.meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className={classes.singleMean}
                style={{
                  backgroundColor: props.lightMode ? "#3b5360" : "white",
                  color: props.lightMode ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example: </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms.map((s) => `${s},`)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definition;
