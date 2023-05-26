import React from "react";

function ArrowBtn({ className }) {
  return (
    <svg
      className={className}
      width="21"
      height="8"
      viewBox="0 0 21 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.8536 4.35355C21.0488 4.15829 21.0488 3.84171 20.8536 3.64645L17.6716 0.464466C17.4763 0.269204 17.1597 0.269204 16.9645 0.464466C16.7692 0.659728 16.7692 0.976311 16.9645 1.17157L19.7929 4L16.9645 6.82843C16.7692 7.02369 16.7692 7.34027 16.9645 7.53553C17.1597 7.7308 17.4763 7.7308 17.6716 7.53553L20.8536 4.35355ZM0 4.5H20.5V3.5H0V4.5Z"
        fill="#3A3A1F"
      />
      <path
        d="M20.8536 4.35355C21.0488 4.15829 21.0488 3.84171 20.8536 3.64645L17.6716 0.464466C17.4763 0.269204 17.1597 0.269204 16.9645 0.464466C16.7692 0.659728 16.7692 0.976311 16.9645 1.17157L19.7929 4L16.9645 6.82843C16.7692 7.02369 16.7692 7.34027 16.9645 7.53553C17.1597 7.7308 17.4763 7.7308 17.6716 7.53553L20.8536 4.35355ZM0 4.5H20.5V3.5H0V4.5Z"
        fill="black"
        fillOpacity="0.2"
      />
    </svg>
  );
}

export default ArrowBtn;
