import $ from "jquery";

export function Get(url, onSuccess, onError) {
    $.ajax({
        url,
        xhrFields: {
            withCredentials: true,
        },
        method: "GET",
        success: onSuccess,
        error: onError,
    });
}