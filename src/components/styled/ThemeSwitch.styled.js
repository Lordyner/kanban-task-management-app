import styled from "styled-components";

export const StyledThemeSwitch = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.colors.grey200};
    padding: 1rem 0 1rem 0;
    margin-left: 1rem;
    border-radius: 6px;


  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.purple400};
    -webkit-transition: .3s;
    transition: .3s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .3s;
    transition: .3s;
  }

  input:checked+.slider {
    background-color: ${({ theme }) => theme.colors.purple400};
  }

  input:focus+.slider {
    box-shadow: 0 0 1px ${({ theme }) => theme.colors.purple400};
  }

  input:checked+.slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;