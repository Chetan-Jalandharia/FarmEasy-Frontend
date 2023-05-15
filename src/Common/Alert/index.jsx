import SwAlert from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swal = withReactContent(SwAlert);

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
export const Load = Swal.mixin({
  timer: 4000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
  },
});

export const Alert = Swal.mixin({
  position: "center",
  showConfirmButton: true,
});

export const DeleteAlert = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success mx-1",
    cancelButton: "btn btn-danger mx-1",
  },
  buttonsStyling: false,
});
export const ConfirmAlert = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success mx-1",
    cancelButton: "btn btn-danger mx-2",
  },
  buttonsStyling: false,
});
