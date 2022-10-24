import styled, { css } from "styled-components";
import colors from "theme/colors";
import device from "theme/device";
import img from "img";

export const Select = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 36px;
  width: 100%;

  &:before {
    content: "";
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 11px;
    background: url(${img.iconCalendar});
    z-index: 1;
  }

  /* Ignore it =) */

  &
    .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    margin-left: -8px;
    position: absolute;
  }

  &
    .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    box-sizing: content-box;
    position: absolute;
    border: 8px solid transparent;
    height: 0;
    width: 1px;
  }

  &
    .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    content: "";
    z-index: -1;
    border-width: 8px;
    left: -8px;
    border-bottom-color: ${colors.grey1};
  }

  & .react-datepicker__triangle {
    display: none;
  }

  &
    .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::before {
    border-top: none;
    border-bottom-color: ${colors.grey4};
  }

  &
    .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::before {
    top: -1px;
    border-bottom-color: ${colors.grey1};
  }

  & .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    bottom: 0;
    margin-bottom: -8px;
  }

  & .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    border-bottom: none;
    border-top-color: ${colors.white};
  }

  &
    .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::before,
  .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    bottom: -1px;
    border-top-color: ${colors.grey1};
  }

  & .react-datepicker-wrapper {
    display: inline-block;
    position: relative;
    padding: 0;
    border: 0;
    width: 100%;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 16px;
      right: 16px;
      width: 2px;
      height: 7px;
      border-radius: 1px;
      background: ${colors.grey1};
      transform: rotate(-135deg);
      transition: All 0.3s;
      z-index: 1;
    }
    &:after {
      right: 20px;
      transform: rotate(135deg);
    }
    &:focus-within {
      &:before {
        transform: rotate(-45deg);
        background: ${colors.black};
      }
      &:after {
        transform: rotate(45deg);
        background: ${colors.black};
      }
    }

    ${(props: any) =>
    props.validation &&
    css`
        &:before,
        &:after {
          background: ${colors.red};
        }
      `}
  }

  & .react-datepicker {
    width: 248px;
    border-radius: 4px;
    box-shadow: 0 6px 14px 7px rgba(50, 50, 50, 0.15);
    background-color: ${colors.white};
    font-size: 14px;
    display: inline-block;
    position: relative;
  }

  & .react-datepicker--time-only .react-datepicker__time-container {
    border-left: 0;
  }

  & .react-datepicker--time-only .react-datepicker__time {
    border-radius: 0.3rem;
  }

  & .react-datepicker--time-only .react-datepicker__time-box {
    border-radius: 0.3rem;
  }

  & .react-datepicker-popper {
    z-index: 100;
  }

  & .react-datepicker-popper[data-placement^="bottom"] {
    margin-top: 10px;
  }

  & .react-datepicker-popper[data-placement^="top"] {
    margin-bottom: 10px;
  }

  & .react-datepicker-popper[data-placement^="right"] {
    margin-left: 8px;
  }

  & .react-datepicker-popper[data-placement^="left"] {
    margin-right: 8px;
  }

  & .react-datepicker__header {
    padding-top: 16px;
    position: relative;
  }

  & .react-datepicker__header--time {
    padding-bottom: 8px;
    padding-left: 5px;
    padding-right: 5px;
  }

  & .react-datepicker__year-dropdown-container--select,
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__month-year-dropdown-container--select,
  .react-datepicker__year-dropdown-container--scroll,
  .react-datepicker__month-dropdown-container--scroll,
  .react-datepicker__month-year-dropdown-container--scroll {
    display: inline-block;
    margin: 0 2px;
  }

  & .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    padding: 0 16px;
    text-align: left;
    margin-top: 0;
    color: ${colors.black};
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  & .react-datepicker__current-month:first-letter {
    text-transform: uppercase;
  }

  & .react-datepicker-time__header {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  & .react-datepicker__navigation {
    cursor: pointer;
    position: absolute;
    top: 16px;
    width: 0;
    padding: 0;
    z-index: 1;
    height: 16px;
    width: 16px;
    text-indent: -999em;
    overflow: hidden;
    background: transparent;
    border: none;
    outline: none;
  }

  & .react-datepicker__navigation--previous {
    right: 48px;
  }

  & .react-datepicker__navigation--previous:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: 16px;
    background: url(${img.iconArrowRight});
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  & .react-datepicker__navigation--previous:hover {
    border-right-color: ${colors.grey1};
  }

  & .react-datepicker__navigation--previous--disabled,
  .react-datepicker__navigation--previous--disabled:hover {
    border-right-color: ${colors.grey5};
    cursor: default;
  }

  & .react-datepicker__navigation--next {
    right: 16px;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 16px;
      height: 16px;
      background: url(${img.iconArrowRight});
    }
  }

  &
    .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 80px;
  }

  & .react-datepicker__navigation--next:hover {
    border-left-color: ${colors.grey1};
  }

  & .react-datepicker__navigation--next--disabled,
  .react-datepicker__navigation--next--disabled:hover {
    border-left-color: ${colors.grey5};
    cursor: default;
  }

  & .react-datepicker__navigation--years {
    position: relative;
    top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  & .react-datepicker__navigation--years-previous {
    top: 4px;
    border-top-color: ${colors.grey2};
  }

  & .react-datepicker__navigation--years-previous:hover {
    border-top-color: ${colors.grey1};
  }

  & .react-datepicker__navigation--years-upcoming {
    top: -4px;
    border-bottom-color: ${colors.grey2};
  }

  & .react-datepicker__navigation--years-upcoming:hover {
    border-bottom-color: ${colors.grey1};
  }

  & .react-datepicker__month-container {
    width: 100%;
    float: left;
  }

  & .react-datepicker__year {
    margin: 0.4rem;
    text-align: center;
  }

  & .react-datepicker__year-wrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: 180px;
  }

  & .react-datepicker__year .react-datepicker__year-text {
    display: inline-block;
    width: 4rem;
    margin: 2px;
  }

  & .react-datepicker__month {
    margin: 0 auto;
    width: fit-content;
    padding-bottom: 10px;
  }

  & .react-datepicker__month .react-datepicker__month-text,
  .react-datepicker__month .react-datepicker__quarter-text {
    display: inline-block;
    width: 4rem;
    margin: 2px;
  }

  & .react-datepicker__input-time-container {
    clear: both;
    width: 100%;
    float: left;
    margin: 5px 0 10px 15px;
    text-align: left;
  }

  & .react-datepicker__input-time-container .react-datepicker-time__caption {
    display: inline-block;
  }

  &
    .react-datepicker__input-time-container
    .react-datepicker-time__input-container {
    display: inline-block;
  }

  &
    .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input {
    display: inline-block;
    margin-left: 10px;
  }

  &
    .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input {
    width: 85px;
  }

  &
    .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type="time"]::-webkit-inner-spin-button,
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type="time"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &
    .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type="time"] {
    -moz-appearance: textfield;
  }

  &
    .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__delimiter {
    margin-left: 5px;
    display: inline-block;
  }

  & .react-datepicker__time-container {
    float: right;
    border-left: 1px solid ${colors.grey1};
    width: 85px;
  }

  & .react-datepicker__time-container--with-today-button {
    display: inline;
    border: 1px solid ${colors.grey1};
    border-radius: 0.3rem;
    position: absolute;
    right: -72px;
    top: 0;
  }

  & .react-datepicker__time-container .react-datepicker__time {
    position: relative;
    background: white;
    border-bottom-right-radius: 0.3rem;
  }

  &
    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box {
    width: 85px;
    overflow-x: hidden;
    margin: 0 auto;
    text-align: center;
  }

  &
    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list {
    list-style: none;
    margin: 0;
    height: calc(195px + (1.7rem / 2));
    overflow-y: scroll;
    padding-right: 0px;
    padding-left: 0px;
    width: 100%;
    box-sizing: content-box;
  }

  &
    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    height: 30px;
    padding: 5px 10px;
    white-space: nowrap;
  }

  &
    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item:hover {
    cursor: pointer;
    background-color: ${colors.grey4};
  }

  &
    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: ${colors.blue};
    color: white;
    font-weight: bold;
  }

  &
    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected:hover {
    background-color: ${colors.blue};
  }

  &
    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--disabled {
    color: ${colors.grey2};
  }

  &
    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--disabled:hover {
    cursor: default;
    background-color: transparent;
  }

  & .react-datepicker__week-number {
    color: ${colors.grey2};
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
  }

  & .react-datepicker__week-number.react-datepicker__week-number--clickable {
    cursor: pointer;
  }

  &
    .react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
    border-radius: 0.3rem;
    background-color: ${colors.grey4};
  }

  & .react-datepicker__day {
    outline: none;
  }

  & .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap;
    margin: 0 auto;
    width: fit-content;
  }

  & .react-datepicker__week:first-child {
    margin: 0 0 0 auto;
  }

  & .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: ${colors.black};
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
    font-size: 12px;
  }

  & .react-datepicker__day--outside-month {
    color: ${colors.grey2};
  }

  & .react-datepicker__day-name:first-letter {
    text-transform: uppercase;
  }

  &
    .react-datepicker__week:first-child
    .react-datepicker__day--outside-month:nth-child(-n
      + 20).react-datepicker__day--disabled {
    display: none !important;
  }

  & .react-datepicker__month--selected,
  .react-datepicker__month--in-selecting-range,
  .react-datepicker__month--in-range,
  .react-datepicker__quarter--selected,
  .react-datepicker__quarter--in-selecting-range,
  .react-datepicker__quarter--in-range {
    border-radius: 0.3rem;
    background-color: ${colors.blue};
    color: ${colors.white};
  }

  & .react-datepicker__month--selected:hover,
  .react-datepicker__month--in-selecting-range:hover,
  .react-datepicker__month--in-range:hover,
  .react-datepicker__quarter--selected:hover,
  .react-datepicker__quarter--in-selecting-range:hover,
  .react-datepicker__quarter--in-range:hover {
    background-color: ${colors.blue};
  }

  & .react-datepicker__month--disabled,
  .react-datepicker__quarter--disabled {
    color: ${colors.grey2};
    pointer-events: none;
  }

  & .react-datepicker__month--disabled:hover,
  .react-datepicker__quarter--disabled:hover {
    cursor: default;
    background-color: transparent;
  }

  & .react-datepicker__day,
  .react-datepicker__month-text,
  .react-datepicker__quarter-text,
  .react-datepicker__year-text {
    cursor: pointer;
  }

  & .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    border-radius: 0.3rem;
    background-color: ${colors.grey4};
  }

  & .react-datepicker__day--today,
  .react-datepicker__month-text--today,
  .react-datepicker__quarter-text--today,
  .react-datepicker__year-text--today {
    font-weight: bold;
  }

  & .react-datepicker__day--highlighted,
  .react-datepicker__month-text--highlighted,
  .react-datepicker__quarter-text--highlighted,
  .react-datepicker__year-text--highlighted {
    border-radius: 0.3rem;
    background-color: ${colors.green2};
    color: ${colors.white};
  }

  & .react-datepicker__day--highlighted:hover,
  .react-datepicker__month-text--highlighted:hover,
  .react-datepicker__quarter-text--highlighted:hover,
  .react-datepicker__year-text--highlighted:hover {
    background-color: ${colors.green2};
  }

  & .react-datepicker__day--highlighted-custom-1,
  .react-datepicker__month-text--highlighted-custom-1,
  .react-datepicker__quarter-text--highlighted-custom-1,
  .react-datepicker__year-text--highlighted-custom-1 {
    color: magenta;
  }

  & .react-datepicker__day--highlighted-custom-2,
  .react-datepicker__month-text--highlighted-custom-2,
  .react-datepicker__quarter-text--highlighted-custom-2,
  .react-datepicker__year-text--highlighted-custom-2 {
    color: green;
  }

  & .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    border-radius: 0.3rem;
    background-color: ${colors.blue};
    color: ${colors.white};
  }

  & .react-datepicker__day--selected:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--in-range:hover,
  .react-datepicker__month-text--selected:hover,
  .react-datepicker__month-text--in-selecting-range:hover,
  .react-datepicker__month-text--in-range:hover,
  .react-datepicker__quarter-text--selected:hover,
  .react-datepicker__quarter-text--in-selecting-range:hover,
  .react-datepicker__quarter-text--in-range:hover,
  .react-datepicker__year-text--selected:hover,
  .react-datepicker__year-text--in-selecting-range:hover,
  .react-datepicker__year-text--in-range:hover {
    background-color: ${colors.blue};
  }

  & .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    border-radius: 0.3rem;
    background-color: ${colors.blue};
    color: ${colors.white};
  }

  & .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__month-text--keyboard-selected:hover,
  .react-datepicker__quarter-text--keyboard-selected:hover,
  .react-datepicker__year-text--keyboard-selected:hover {
    background-color: ${colors.blue};
  }

  & .react-datepicker__day--in-selecting-range,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__year-text--in-selecting-range {
    background-color: ${colors.blue3};
  }

  & .react-datepicker__month--selecting-range .react-datepicker__day--in-range,
  .react-datepicker__month--selecting-range
    .react-datepicker__month-text--in-range,
  .react-datepicker__month--selecting-range
    .react-datepicker__quarter-text--in-range,
  .react-datepicker__month--selecting-range
    .react-datepicker__year-text--in-range {
    background-color: ${colors.grey4};
    color: ${colors.black};
  }

  & .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    cursor: default;
    color: ${colors.grey2};
    outline: none;
  }

  & .react-datepicker__day--disabled:hover,
  .react-datepicker__month-text--disabled:hover,
  .react-datepicker__quarter-text--disabled:hover,
  .react-datepicker__year-text--disabled:hover {
    background-color: transparent;
  }

  & .react-datepicker__month-text.react-datepicker__month--selected:hover,
  .react-datepicker__month-text.react-datepicker__month--in-range:hover,
  .react-datepicker__month-text.react-datepicker__quarter--selected:hover,
  .react-datepicker__month-text.react-datepicker__quarter--in-range:hover,
  .react-datepicker__quarter-text.react-datepicker__month--selected:hover,
  .react-datepicker__quarter-text.react-datepicker__month--in-range:hover,
  .react-datepicker__quarter-text.react-datepicker__quarter--selected:hover,
  .react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover {
    background-color: ${colors.blue};
  }

  & .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover {
    background-color: ${colors.grey4};
  }

  & .react-datepicker__input-container {
    position: relative;
    display: inline-block;
    width: 100%;

    & > input {
      width: 100%;
      height: 38px;
      font-size: 12px;
      border-radius: 4px;
      border: 1px solid ${colors.grey1};
      outline: 1px solid transparent;
      background-color: ${colors.white};
      padding-left: 36px;
      outline: none;

      &:focus {
        box-shadow: 0 2px 10px 0 rgba(26, 26, 26, 0.15);
        border: 1px solid ${colors.black};
        outline: 1px solid ${colors.black};
      }

      ${(props: any) =>
    props.validation &&
    css`
          background: ${colors.red2};
          box-shadow: 0 2px 10px 0 rgba(255, 0, 101, 0.15) !important;
          border: 1px solid ${colors.red1};
          outline: 1px solid ${colors.red1};

          &:focus {
            border: 1px solid ${colors.red1};
            outline: 1px solid ${colors.red1};
            background: ${colors.red2};
          }
        `}
    }
  }

  & .react-datepicker__year-read-view,
  .react-datepicker__month-read-view,
  .react-datepicker__month-year-read-view {
    border: 1px solid transparent;
    border-radius: 0.3rem;
  }

  & .react-datepicker__year-read-view:hover,
  .react-datepicker__month-read-view:hover,
  .react-datepicker__month-year-read-view:hover {
    cursor: pointer;
  }

  &
    .react-datepicker__year-read-view:hover
    .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__year-read-view:hover
    .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-read-view:hover
    .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view:hover
    .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover
    .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover
    .react-datepicker__month-read-view--down-arrow {
    border-top-color: ${colors.grey1};
  }

  & .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    border-top-color: ${colors.grey2};
    float: right;
    margin-left: 20px;
    top: 8px;
    position: relative;
    border-width: 0.45rem;
  }

  & .react-datepicker__year-dropdown,
  .react-datepicker__month-dropdown,
  .react-datepicker__month-year-dropdown {
    background-color: ${colors.grey4};
    position: absolute;
    width: 50%;
    left: 25%;
    top: 30px;
    z-index: 1;
    text-align: center;
    border-radius: 0.3rem;
    border: 1px solid ${colors.grey1};
  }

  & .react-datepicker__year-dropdown:hover,
  .react-datepicker__month-dropdown:hover,
  .react-datepicker__month-year-dropdown:hover {
    cursor: pointer;
  }

  & .react-datepicker__year-dropdown--scrollable,
  .react-datepicker__month-dropdown--scrollable,
  .react-datepicker__month-year-dropdown--scrollable {
    height: 150px;
    overflow-y: scroll;
  }

  & .react-datepicker__year-option,
  .react-datepicker__month-option,
  .react-datepicker__month-year-option {
    line-height: 20px;
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  & .react-datepicker__year-option:first-of-type,
  .react-datepicker__month-option:first-of-type,
  .react-datepicker__month-year-option:first-of-type {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }

  & .react-datepicker__year-option:last-of-type,
  .react-datepicker__month-option:last-of-type,
  .react-datepicker__month-year-option:last-of-type {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }

  & .react-datepicker__year-option:hover,
  .react-datepicker__month-option:hover,
  .react-datepicker__month-year-option:hover {
    background-color: ${colors.grey2};
  }

  &
    .react-datepicker__year-option:hover
    .react-datepicker__navigation--years-upcoming,
  .react-datepicker__month-option:hover
    .react-datepicker__navigation--years-upcoming,
  .react-datepicker__month-year-option:hover
    .react-datepicker__navigation--years-upcoming {
    border-bottom-color: ${colors.grey1};
  }

  &
    .react-datepicker__year-option:hover
    .react-datepicker__navigation--years-previous,
  .react-datepicker__month-option:hover
    .react-datepicker__navigation--years-previous,
  .react-datepicker__month-year-option:hover
    .react-datepicker__navigation--years-previous {
    border-top-color: ${colors.grey1};
  }

  & .react-datepicker__year-option--selected,
  .react-datepicker__month-option--selected,
  .react-datepicker__month-year-option--selected {
    position: absolute;
    left: 15px;
  }

  & .react-datepicker__close-icon {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: 0;
    padding: 0px 6px 0px 0px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: table-cell;
    vertical-align: middle;

    &:after {
      cursor: pointer;
      background-color: ${colors.blue};
      color: ${colors.white};
      border-radius: 50%;
      height: 16px;
      width: 16px;
      padding: 2px;
      font-size: 12px;
      line-height: 1;
      text-align: center;
      display: table-cell;
      vertical-align: middle;
      content: "\00d7";
    }
  }

  & .react-datepicker__today-button {
    background: ${colors.grey4};
    border-top: 1px solid ${colors.grey1};
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    padding: 5px 0;
    clear: left;
  }

  & .react-datepicker__portal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 2147483647;
  }

  & .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__day,
  .react-datepicker__portal .react-datepicker__time-name {
    width: 3rem;
    line-height: 3rem;
  }

  &
    @media (max-width: 400px), (max-height: 550px) {
    .react-datepicker__portal .react-datepicker__day-name,
    .react-datepicker__portal .react-datepicker__day,
    .react-datepicker__portal .react-datepicker__time-name {
      width: 2rem;
      line-height: 2rem;
    }
  }

  & .react-datepicker__portal .react-datepicker__current-month,
  .react-datepicker__portal .react-datepicker-time__header {
    font-size: 1.44rem;
  }

  & .react-datepicker__portal .react-datepicker__navigation {
    border: 0.81rem solid transparent;
  }

  & .react-datepicker__portal .react-datepicker__navigation--previous {
    border-right-color: ${colors.grey2};
  }

  & .react-datepicker__portal .react-datepicker__navigation--previous:hover {
    border-right-color: ${colors.grey1};
  }

  & .react-datepicker__portal .react-datepicker__navigation--previous--disabled,
  .react-datepicker__portal
    .react-datepicker__navigation--previous--disabled:hover {
    border-right-color: ${colors.grey5};
    cursor: default;
  }

  & .react-datepicker__portal .react-datepicker__navigation--next {
    border-left-color: ${colors.grey2};
  }

  & .react-datepicker__portal .react-datepicker__navigation--next:hover {
    border-left-color: ${colors.grey1};
  }

  & .react-datepicker__portal .react-datepicker__navigation--next--disabled,
  .react-datepicker__portal
    .react-datepicker__navigation--next--disabled:hover {
    border-left-color: ${colors.grey5};
    cursor: default;
  }

  @media ${device.mobileL} {
  }
`;
