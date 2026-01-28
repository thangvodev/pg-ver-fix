import React from "react";
import { Form } from "../common/form";
import { Input } from "antd";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import Eye from "../../static/icons/eye.svg";

const CodeForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  function handleFinish() {
    navigate("/home");
  }

  return (
    <div className="flex flex-col gap-[32px]">
      <Form form={form} className="flex-1 " onFinish={handleFinish}>
        <Form.Item
          name="code"
          rules={[{ required: true, message: "Vui lòng nhập mã bảo mật" }]}
        >
          <Input.Password
            placeholder="Nhập mã bảo mật"
            className="h-[48px] rounded-[8px]"
            style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
            iconRender={(visible) =>
            visible ? (
              <EyeOutlined style={{ fontSize: 24 }} />
            ) : (
              <EyeInvisibleOutlined style={{ fontSize: 24 }} />
            )
  }
          />
        </Form.Item>
      </Form>
      <div className="bg-white px-[16px] pb-[24px] ">
        <Button
          text={
            <div className="text-base font-medium text-white">Xác nhận</div>
          }
          className="w-full rounded-[32px] py-[14px]"
          style={{
            background:
              "linear-gradient(90deg, #58D795 0%, #4CBA81 31.83%, #159954 101.86%)",
          }}
          onClick={() => form.submit()}
        />
      </div>
    </div>
  );
};

export { CodeForm };
