import ContactFormTemplate from './contact-form.html';

export default function () {
    return {
        restrict: 'E',
        template: ContactFormTemplate,
        scope: "="
    }
}