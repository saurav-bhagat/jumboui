import type { Meta, StoryObj } from '@storybook/react';
import RangePicker from '../../components/pickers/RangePicker/RangePicker';

const meta = {
	title: 'Pickers/DatePicker',
	component: RangePicker,
	tags: ['autodocs'],
	argTypes: {
		picker: {
			control: {
				type: 'select',
				options: ['month', 'week', 'quarter', 'year'],
			},
		},
	},
} satisfies Meta<typeof RangePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleDateRangePicker: Story = {
	args: {},
};

export const MonthRangePicker: Story = {
	args: { picker: 'month' },
};
