import { DatePicker as AntDatePicker } from 'antd';

const { RangePicker: AntRangePicker } = AntDatePicker;

type pickerType = 'week' | 'month' | 'year' | 'quarter';

type RangePickerProps = {
	// range of picker
	picker?: pickerType
}

const RangePicker = ({ picker = 'year' }: RangePickerProps) => {
	return (
		<AntRangePicker picker={picker} />
	);
};

export default RangePicker;