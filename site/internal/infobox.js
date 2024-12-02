function onSwitchColor(n) {
    let blue = n.previousElementSibling;
    let red = blue.previousElementSibling;

    if (red.style.display !== "none") {
        red.style.display = "none";
    }
    else {
        red.style.display = "block";
        n.textContent = "Click to view Blue"
    }

    if (blue.style.display !== "none") {
        blue.style.display = "none";
    }
    else {
        blue.style.display = "block";
        n.textContent = "Click to view Red"
    }
    
}