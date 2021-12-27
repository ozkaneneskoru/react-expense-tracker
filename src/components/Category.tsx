import { Button, Form, Input, Modal, Select, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/actions/categoryAction";
import { AppState } from "../store/reducers";
import { CategoryForm, CategoryModel } from "../types/category";

type Mode = "new" | "edit";



const emptyForm: CategoryForm = {
  name: "",
  type: "expense",
  color: "black"
}

function Category() {
    const {data, loading, error} = useSelector((state: AppState) => state.categories);
    const [isModalVisible, setIsModalVisible]= useState(false);
    const [mode, setMode]= useState<Mode>("new");
    const [form, setForm]= useState<CategoryForm>(emptyForm);

    const showModal=(mode: Mode)=>{
      setMode(mode);
      setIsModalVisible(true);
    }
    const handleOk= () =>{
      setIsModalVisible(false);
      setMode("new");
      setForm(emptyForm);
      console.log(form);
    }
    const handleCancel= ()=>{
      setIsModalVisible(false);
      setMode("new");
      setForm(emptyForm);
    }

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
          render: (text: string, category: CategoryModel)=> {
            return <Tag color={category.color}>{text.toUpperCase()}</Tag>;
          }
        },
        // {
        //   title: 'Action',
        //   key: 'action',
        //   render: (text, record) => (
        //     <Space size="middle">
        //       <a>Invite {record.name}</a>
        //       <a>Delete</a>
        //     </Space>
        //   ),
        // },
      ];

    const dispatch = useDispatch();
    
    // useEffect(() => {
    //   dispatch(getCategories());
    // });
    return (
      <>
      <div>
        <Button type="primary" onClick={()=>showModal("new")}>New Category</Button>
        <Modal title={mode==="new" ? "New Category" : "Update Category"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <Form.Item label="Category Name">
         <Input name="name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
       </Form.Item>
       <Form.Item label="Category Type">
         <Select defaultValue="expense" onChange={e => setForm({...form, type:e})}>
           <Select.Option value="income">Income</Select.Option>
           <Select.Option value="expense">Expense</Select.Option>
         </Select>
       </Form.Item>
       <Form.Item label="Color">
         <SketchPicker onChange={e => setForm({...form, color: e.hex})}/>
       </Form.Item>
      </Modal>
      </div>
        <Table columns={columns}></Table>
      </>
      

    );
}

export default Category;