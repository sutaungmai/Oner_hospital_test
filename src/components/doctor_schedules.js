import React, { Component } from 'react'
import { Form, Input, Button,Select,Space } from 'antd'
import 'antd/dist/antd.css'

class doctor_schedules extends Component {
    render() {
        const { Option } = Select;
        return (
            <div>
                <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    >
                    <Form.Item name="Employee" label="Employee" rules={[{ required: true }]}>
                            <Select
                            placeholder="Choose Employee"
                            >
                            <Option value="Employee_1">Employee 1</Option>
                            <Option value="Employee_2">Employee 2</Option>
                            <Option value="Employee_3">Employee 3</Option>
                            </Select>
                    </Form.Item>    

                    <Form.Item
                        label="Name"
                        name="Name"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="Phone"
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        label="Department"
                        name="Department"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Position"
                        name="Position"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name={['user', 'Doctor']} label="Doctor Schedule">
                        <Input.TextArea />
                    </Form.Item>



                    <Space>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                        <Button type="primary" htmlType="button">
                        Cancel
                        </Button>
                    </Space>
                </Form>
            </div>
        )
    }
}

export default doctor_schedules
