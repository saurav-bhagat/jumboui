import { DatePicker as AntDatePicker } from 'antd';
import React from 'react';

const { RangePicker: AntRangePicker } = AntDatePicker;

type pickerType = 'week' | 'month' | 'year' | 'quarter' | 'date';

type RangePickerProps = {

	picker?: pickerType; /* range of picker */
	className?: string; /* classname of picker */

} & typeof AntRangePicker extends React.ComponentType<infer P> ? P : never;


/**
 * A Date Range Picker component
 */
const RangePicker = ({ picker = 'date', ...rest }: RangePickerProps) => {
	return (
		<AntRangePicker picker={picker} {...rest} />
	);
};

export default RangePicker;