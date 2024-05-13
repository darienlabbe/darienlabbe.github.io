// For swapping between tailwind css options
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default cn;