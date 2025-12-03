// MAIN IMAGE
const mainInput = document.getElementById("mainImageInput");
const mainPreview = document.getElementById("mainPreview");
const thumbContainer = document.getElementById("thumbContainer");

// When uploading → show main preview & add thumbnail
mainInput.addEventListener("change", () => {
    const file = mainInput.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    // Update main photo
    mainPreview.src = url;

    // Create small thumbnail
    const thumb = document.createElement("img");
    thumb.src = url;
    thumb.addEventListener("click", () => {
        mainPreview.src = thumb.src;
    });

    thumbContainer.insertBefore(thumb, thumbContainer.firstChild);
});

// SUBMIT FORM
document.getElementById("submitCar").addEventListener("click", () => {

    const data = {
        make: make.value,
        model: model.value,
        year: year.value,
        mileage: mileage.value,
        fuel: fuel.value,
        transmission: transmission.value,
        color: color.value,
        condition: condition.value,
        sellerName: sellerName.value,
        phone: phone.value,
        whatsapp: whatsapp.value,
        description: description.value
    };

    console.log("Car Submitted:", data);

    alert("Thank you! Your vehicle has been submitted. We will contact you.");
});
