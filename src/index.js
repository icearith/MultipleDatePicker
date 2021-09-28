import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Button } from "antd";
import MultipleDatePicker from "./multipleDatePicker";

ReactDOM.render(
  <div className="App">
    <Form
      onFinish={(values) => {
        console.log("Success:", values);
      }}
    >
      <Form.Item name="mulitiple" label="多选日期">
        <MultipleDatePicker selectProps={{ style: { width: "300px" } }} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>,
  document.getElementById("root")
);
