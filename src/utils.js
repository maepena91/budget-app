export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "usd",
    style: "currency",
    minimumFractionDigits: 0, //to avoid digital numbers we set the default as zero
}) //we will use this number format. We set the value as undefined to set it as the local currency







//utility code




