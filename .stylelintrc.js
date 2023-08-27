/** @type {import("stylelint").Config} */
module.exports = {
  // とりあえず、ソート順を変更できるようにしておいている
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  plugins: ["stylelint-order"],
  rules: {
    "order/order": ["custom-properties", "declarations"],
  },
};
