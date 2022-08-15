import Swal from 'sweetalert2';

export const errorText = (error) => {
  var text = error;

  if (error.response != undefined) {
    if (error.response.data.details) {
      let msg = [];
      error.response.data.details.map((item) => msg.push(item.message));
      text = msg.join(';<br>');
    } else if (error.response.data.error) {
      text = error.response.data.error;
    }
  } else if (error.message != undefined) {
    text = error.message;
  }

  return text;
};

export const errorSwal = (error) => {
  Swal.fire({
    title: errorText(error),
    icon: 'warning',
  });
};
