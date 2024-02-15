import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Result from "./result";
import { AppStoreContext } from "../../App";
import React, { useContext } from "react";
import Start from "./start";

export default function Test() {
  const appStore = useContext(AppStoreContext);
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [user, setUser] = useState();
  const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    setLoading(true);
    appStore.authStore.mgr.getUser().then(function (user) {
      if (user != null) {
        fetch("http://localhost:5013/Test", {
          headers: { Authorization: `Bearer ${user.access_token}` },
        })
          .then((resp) => resp.json())
          .then((json) => setQuestions(json[0].Questions))
          .then(() => setLoading(false));
        setUser(user);
      }
    });
  }, []);

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === questions[step].Correct) setCorrect(correct + 1);
  };
  console.log(step);

  return (
    <>
      {(loading && (
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "primary.light",
            display: "flex",
            justifyContent: "center",
            fontFamily: "-apple-system",
          }}
        >
          <Typography>Loading...</Typography>
        </Box>
      )) || (
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "primary.light",
            display: "flex",
            justifyContent: "center",
            fontFamily: "-apple-system",
          }}
        >
          {step !== questions.length ? (
            <Start
              questions={questions[step]}
              onClickVariant={onClickVariant}
            />
          ) : (
            <Result correct={correct} />
          )}
        </Box>
      )}
    </>
  );
}
