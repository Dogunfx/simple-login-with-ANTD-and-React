"use client";
import { Card, Button, Form, Input, message, Typography } from "antd";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [myFormState] = Form.useForm();

  let [fn, updateFn] = useState(5);
  let [sn, updateSn] = useState(19);
  let [score, updateScore] = useState(0);
  let [total, updateTotal] = useState(1);
  const [time, setTime] = useState(0);

  function checkAnswer() {
    let ans = myFormState.getFieldValue("answer");

    if (ans == fn * sn) {
      message.success("Wow!!😳 CorrectCorrect ✅✅✅");
      changeQuestion();
      updateScore((pre) => pre + 1);
      const ntime = 0;
      setTime(ntime);
    } else {
      message.error(
        "OLODO,😂😂😂 --- You are wrong the correct answer is " + fn * sn
      );
    }
  }

  function changeQuestion() {
    updateFn(Math.ceil(Math.random() * 20));
    updateSn(Math.ceil(Math.random() * 15));
    updateTotal((pre) => pre + 1);
  }

  let ntime = 0;
  function handleTimer() {
    ntime = time + 1;
    if (ntime >= 10) {
      ntime = 0;
      changeQuestion();
    }
    setTime(ntime);
    // message.info("ok");
  }

  useEffect(() => {
    let clearer = setInterval(handleTimer, 1000);
    return () => clearInterval(clearer);
  }, []);

  return (
    <Card
      title="Welcome to your Math quiz..."
      className="max-w-sm mx-auto sm:my-60 my-24"
    >
      <div className="text-center">
        <h3 className="text-2xl ">Welcome DogunFX,</h3>
        <Typography.Title className="text-blue-800">
          Timer - {time} sec
        </Typography.Title>
        <p>
          Your Current score is: {score} out of : {total}
        </p>
        <br />
        <p className="text-4xl text-purple-800 ">
          What is the answer to {fn} * {sn} ?
        </p>
        <br />

        <Form form={myFormState}>
          <Form.Item name="answer">
            <Input placeholder="Enter the Answer here" />
          </Form.Item>
        </Form>
      </div>
      <div className="flex">
        <Button type="primary" className="mr-auto" onClick={changeQuestion}>
          Skip This
        </Button>
        <Button onClick={checkAnswer}>Check Answer</Button>
      </div>
    </Card>
  );
}
