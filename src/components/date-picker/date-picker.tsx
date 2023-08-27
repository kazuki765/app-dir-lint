// import { useRef } from "react";
// import { DateValue, useDatePicker } from "react-aria";
// import { DatePickerStateOptions, useDatePickerState } from "react-stately";

// import { Button } from "../button";

// export type DatePickerProps = {
//   initialState: DatePickerStateOptions<DateValue>;
//   label: string;
// };

// export function DatePicker(props: DatePickerProps) {
//   const state = useDatePickerState(props.initialState);
//   const ref = useRef(null);
//   const {
//     groupProps,
//     labelProps,
//     fieldProps,
//     buttonProps,
//     dialogProps,
//     calendarProps,
//   } = useDatePicker(props, state, ref);

//   return (
//     <div style={{ display: "inline-flex", flexDirection: "column" }}>
//       <div {...labelProps}>{props.label}</div>
//       <div
//         {...groupProps}
//         ref={ref}
//         style={{ display: "flex" }}
//       >
//         {/* <DateField {...fieldProps} /> */}
//         <Button {...buttonProps}>🗓</Button>
//       </div>
//       {/* {state.isOpen && (
//         <Popover
//           state={state}
//           triggerRef={ref}
//           placement="bottom start"
//         >
//           <Dialog {...dialogProps}>
//             <Calendar {...calendarProps} />
//           </Dialog>
//         </Popover>
//       )} */}
//     </div>
//   );
// }
