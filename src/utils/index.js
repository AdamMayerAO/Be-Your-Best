import toastr from 'toastr';

const showToast = (message, type) => {
    if(type==="success") {
        toastr.success(message);
    } else if(type==="error") {
        toastr.error(message);
    } else {
        toastr.info(message);
    }
}

export {
    showToast
};