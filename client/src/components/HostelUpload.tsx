import React, { useEffect, useState } from "react";
import { createCard } from "../api/createCard";
import { useParams } from "react-router-dom";
import { TDeck } from "../api/getDecks";
import { getDeck } from "../api/getDeck";
import { deleteCard } from "../api/deleteCard";
import {
  Button,
  Form,
  Input,
  FormProps,
  message,
  Upload,
  Modal,
  Image,
  Divider,
} from "antd";
import "./Deck.css";
import { useForm } from "antd/es/form/Form";
import { TCard } from "../api/getDecks";
import FormItem from "antd/es/form/FormItem";
import { PlusOutlined } from "@ant-design/icons";
import type { GetProp, UploadFile, UploadProps } from "antd";
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const beforeUpload = (file: FileType) => {
  const isJpgOrPng =
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    file.type === "image/jpg";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  console.log(file.size / 1024 / 1024);
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  console.log(isJpgOrPng, isLt2M);
  return isJpgOrPng && isLt2M;
  // return isJpgOrPng;
};

export default function Deck() {
  const { TextArea } = Input;
  const onFinish: FormProps<TCard>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<TCard>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
  const [executingFirebase, setExecutingFirebase] = useState(false)
  // const [text, setText] = useState("");
  const [cardForm] = useForm();
  const [value, setValue] = useState("");

  async function handleCreateDeck() {
    // console.log(cardForm.getFieldsValue());
    setExecutingFirebase(true)
    const name = cardForm.getFieldValue("name");
    const interest = cardForm.getFieldValue("interest");
    const experience = cardForm.getFieldValue("experience");
    const image = cardForm.getFieldValue("image");
    const formData = {
      name: name,
      interest: interest,
      experience: experience,
      image: image.originFileObj
    }
  }

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    cardForm.setFieldValue("image", newFileList[0]);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  useEffect(() => {
    
  }, []);

  return (
    <div className="Deck">
      <Divider style={{ background: "#000" }}></Divider>
      <h1>Hostel Experience Uploading</h1>
      <div className="form_alignment">
        <Form
          form={cardForm}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 1000 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item name="name">
            <label htmlFor="name">Name</label>
            <Input
              id="name"
              type="text"
              onChange={(event: any) => {
                const value = event.target.value
                  .replace(/^ /, "")
                  .replace(/\s+/g, " ");
                cardForm.setFieldValue("name", value);
              }}
            />
          </Form.Item>

          <Form.Item name="interest">
            <label htmlFor="interest">Interests/Majors</label>
            <Input
              id="interest"
              type="text"
              onChange={(event: any) => {
                const value = event.target.value
                  .replace(/^ /, "")
                  .replace(/\s+/g, " ");
                cardForm.setFieldValue("interest", value);
              }}
            />
          </Form.Item>

          <Form.Item name="experience">
            <label htmlFor="experience">Experience</label>
            <TextArea
              id="experience"
              placeholder="Describe your experience in RV"
              autoSize
              onChange={(event: any) => {
                const value = event.target.value
                  .replace(/^ /, "")
                  .replace(/\s+/g, " ");
                cardForm.setFieldValue("experience", value);
              }}
            />
          </Form.Item>

          <Form.Item name="image">
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-card"
              className="avatar-uploader"
              id="image"
              fileList={fileList}
              beforeUpload={beforeUpload}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img
                alt="profile_picture"
                style={{ width: "100%" }}
                src={previewImage}
              />
            </Modal>
          </Form.Item>

          <FormItem wrapperCol={{ offset: 8, span: 16 }}>
            <Button htmlType="submit" onClick={handleCreateDeck} disabled={executingFirebase}>
              Create Profile
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}
