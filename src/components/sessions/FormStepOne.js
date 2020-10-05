import React from 'react'
import { Form, Button, Row, Col, Select, Divider } from 'antd';

const { Option } = Select;

const StepOne = Form.create({
	name: 'step_one'
})(props => {
	const { getFieldDecorator, validateFields } = props.form;
	const validateInput = (e) => {
		e.preventDefault();
		validateFields((err, values) => {
			if (!err) {
				props.submittedValues(values);
				props.handleNextButton();
			}
		});
	}
	return (
		<>

			<Form onSubmit={validateInput}>
				<Divider></Divider>
				<Row gutter={30}>
					<Col span={8}>
						<Form.Item label="Group" className="mb-4">
							{getFieldDecorator('f_one_s_one', {
								rules: [{ required: false, message: 'Cannot be empty!' }],
								initialValue: props.f_one_s_one
							})(
								<Select size="large" placeholder="Select Group(s)">
									<Option value="jack">Jack</Option>
									<Option value="lucy">Lucy</Option>
									<Option value="disabled">Disabled</Option>
									<Option value="Yiminghe">yiminghe</Option>
								</Select>)}
						</Form.Item>
					</Col>

					<Col span={8}>
						<Form.Item label="Business Unit" className="mb-4">
							{getFieldDecorator('f_one_s_one', {
								rules: [{ required: false, message: 'Cannot be empty!' }],
								initialValue: props.f_one_s_one
							})(
								<Select size="large" placeholder="Select Business Unit(s)">
									<Option value="jack">Jack</Option>
									<Option value="lucy">Lucy</Option>
									<Option value="disabled">Disabled</Option>
									<Option value="Yiminghe">yiminghe</Option>
								</Select>)}
						</Form.Item>
					</Col>

					<Col span={8}>
						<Form.Item label="Country" className="mb-4">
							{getFieldDecorator('f_one_s_one', {
								rules: [{ required: false, message: 'Cannot be empty!' }],
								initialValue: props.f_one_s_one
							})(
								<Select size="large" placeholder="Select Country(s)">
									<Option value="jack">Jack</Option>
									<Option value="lucy">Lucy</Option>
									<Option value="disabled">Disabled</Option>
									<Option value="Yiminghe">yiminghe</Option>
								</Select>)}
						</Form.Item>
					</Col>

					<Col span={8}>
						<Form.Item label="Brand" className="mb-4">
							{getFieldDecorator('f_one_s_one', {
								rules: [{ required: false, message: 'Cannot be empty!' }],
								initialValue: props.f_one_s_one
							})(
								<Select size="large" placeholder="Select Brand(s)">
									<Option value="jack">Jack</Option>
									<Option value="lucy">Lucy</Option>
									<Option value="disabled">Disabled</Option>
									<Option value="Yiminghe">yiminghe</Option>
								</Select>)}
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item label="Media Tactic" className="mb-4">
							{getFieldDecorator('f_one_s_one', {
								rules: [{ required: false, message: 'Cannot be empty!' }],
								initialValue: props.f_one_s_one
							})(
								<Select size="large" placeholder="Select Media Tactic(s)">
									<Option value="jack">Jack</Option>
									<Option value="lucy">Lucy</Option>
									<Option value="disabled">Disabled</Option>
									<Option value="Yiminghe">yiminghe</Option>
								</Select>)}
						</Form.Item>
					</Col>
				</Row>
				<Divider></Divider>
				<Form.Item className="text-center">
					<Button type="primary" size="large" htmlType="submit" style={{ width: 160 }}>Next</Button>
				</Form.Item>
			</Form>
		</>
	);
});

export default StepOne;