// TODO

// 1. When the user passes in an incorrect input and submits the form, we want to show them an error message on all inputs shown. This means we need to handle all the errors at once.

// 2. When the users passes the incorrect data we want it to update real time on the card. However, they won't still be able to submit the form.

// 3. When the user passes the right data in and the form is submitted we want to asynchronously load a spinner for 10 seconds and then we will show the feedback message.

/**
 * This is a form component
 */
class FormComponent {
  #form = /** @type {HTMLFormElement}*/ (document.getElementById('form'));
  #name = /** @type {HTMLInputElement}*/ (document.getElementById('card-name'));
  #number = /** @type {HTMLInputElement}*/ (
    document.getElementById('card-number')
  );
  #month = /** @type {HTMLInputElement}*/ (
    document.getElementById('card-month')
  );
  #year = /** @type {HTMLInputElement}*/ (document.getElementById('card-year'));
  #securityNumber = /** @type {HTMLInputElement}*/ (
    document.getElementById('card-cvc')
  );


  // Select the loading spinner
  #loadingSpinner = /** @type {HTMLDivElement} */ (
    document.querySelector('.loading-spinner')
  );

  // Select the feedback message on form submission
  #feedback = /** @type {HTMLElement } */ (
    document.querySelector('.interactive-card__info-feedback')
  );

  /**
   * Takes in no argument and will be called the "new" keyword is used.
   */
  constructor() {
    // Handle the form submission event form the user.
    this.#form?.addEventListener('submit', this.#handleFormSubmit.bind(this));
    this.#name?.addEventListener('change', this.#handleCardNameInput);
    this.#number?.addEventListener('input', this.#handleCardNumberInput);
    this.#month?.addEventListener('change', this.#handleCardMonthInput);
    this.#year?.addEventListener('change', this.#handleCardYearInput);
    this.#securityNumber?.addEventListener(
      'change',
      this.#handleCardSecurityInput
    );
  }

  /**
   *
   * @param {Event} evtObj
   */
  #handleCardNumberInput(evtObj) {
    if (evtObj.target instanceof HTMLInputElement) {
      const cardNumber = /** @type {HTMLParagraphElement} */ (
        document.querySelector('.card-owner-number')
      );

      const cardNumberInput = evtObj.target;
      const position = cardNumberInput.selectionEnd;
      const length = cardNumberInput.value.length;

      cardNumberInput.value = cardNumberInput.value
        .replace(/[^\dA-Z]/g, '')
        .replace(/(.{4})/g, '$1 ')
        .trim();

      if (
        position !== length &&
        (position !== length - 1 ||
          isNaN(parseInt(cardNumberInput.value[position], 10)))
      ) {
        cardNumberInput.selectionEnd = position;
      }

      cardNumber.textContent = cardNumberInput.value;

      console.log(position, length, cardNumberInput.value);
    }
  }

  /**
   *
   * @param {Event} evtObj
   */
  #handleCardSecurityInput(evtObj) {
    if (evtObj.target instanceof HTMLInputElement) {
      const cardSecurity = /** @type {HTMLParagraphElement}*/ (
        document.querySelector('.card-owner-cvv')
      );
      cardSecurity.textContent = evtObj.target?.value;
    }
  }

  /**
   *
   * @param {Event} evtObj - The event object
   */
  #handleCardYearInput(evtObj) {
    if (evtObj.target instanceof HTMLInputElement) {
      const cardYear = /** @type {HTMLSpanElement}*/ (
        document.querySelector('.card-owner-expiration-date__year')
      );
      cardYear.textContent = evtObj.target?.value;
    }
  }

  /**
   * @param {Event} evtObj - The event object
   */
  #handleCardMonthInput(evtObj) {
    if (evtObj.target instanceof HTMLInputElement) {
      const cardMonth = /** @type {HTMLSpanElement}*/ (
        document.querySelector('.card-owner-expiration-date__month')
      );
      cardMonth.textContent = evtObj.target?.value;
    }
  }

  /**
   * @param {Event} evtObj - The event object
   */
  #handleCardNameInput(evtObj) {
    if (evtObj.target instanceof HTMLInputElement) {
      const cardName = /** @type {HTMLParagraphElement}*/ (
        document.querySelector('.card-owner-name')
      );
      cardName.textContent = evtObj.target?.value.toUpperCase();
    }
  }

  /**
   *
   * @param {Event} evtObj - The event object
   * @return {Promise<void>}
   */
  async #handleFormSubmit(evtObj) {
    evtObj.preventDefault();

    try {
      this.#validateUserInput();

      // Hide the form
      this.#form.style.display = 'none';

      // show the loading animation.
      this.#loadSpinner();

      // Simulate a delay (10 seconds)
      await new Promise((resolve) => setTimeout(resolve, 10000));

      // Remove the loading spinner
      this.#removeLoadSpinner();

      // Add the feedback message
      this.#feedback.removeAttribute('hidden');
    } catch (error) {
      // The error will be handled here. Although, we would not need to handle anything serious
      console.error(error);
    }
  }

  /**
   * This method takes in no parameter.
   */
  #loadSpinner() {
    this.#loadingSpinner.classList.add('active');
  }

  /**
   * This method takes in no parameter
   */
  #removeLoadSpinner() {
    this.#loadingSpinner.classList.remove('active');
  }

  /**
   *
   * @param {HTMLInputElement} input
   * @param {string} message
   * @param {string} className
   * @return {object}
   */
  #generateError(input, message, className) {
    input.setAttribute('aria-invalid', 'true');
    const error = {
      message,
      className
    };
    return error;
  }

  /**
   *
   * @param {HTMLInputElement} input
   * @param {string} message
   * @param {string} className
   * @return {object}
   */
  #removeError(input, message, className) {
    input.setAttribute('aria-invalid', 'false');
    const error = {
      message,
      className
    };
    return error;
  }

  /**
   * This will validate the error from the user.
   */
  #validateUserInput() {
    // This will pack all the errors for each input
    const userErrors = /** @type {Array<Object>}*/ ([]);

    const inputElements =
      /** @type {NodeList} */ document.querySelectorAll('input');

    inputElements.forEach(function (inputElement) {
      if (inputElement instanceof HTMLInputElement) {
        // If an input element does not contain any data on form submission. Can't

        if (
          inputElement.value.trim() === '' ||
          inputElement.validity.valueMissing
        ) {
          const userError = this.#generateError(
            inputElement,
            'Cannot be blank',
            'error active'
          );
          userErrors.push(userError);
        } else if (
          inputElement.validity.patternMismatch &&
          inputElement.getAttribute('id') === 'card-name'
        ) {
          const userError = this.#generateError(
            inputElement,
            'Wrong Format, letters only',
            'error active'
          );
          userErrors.push(userError);
        } else if (
          inputElement.getAttribute('id') !== 'card-name' &&
          inputElement.validity.patternMismatch
        ) {
          const userError = this.#generateError(
            inputElement,
            'Wrong Format, numbers only',
            'error active'
          );
          userErrors.push(userError);
        } else {
          const userError = this.#removeError(inputElement, '', 'error');
          userErrors.push(userError);
        }
      }
    }, this);

    const errorCardMessages = /** @type {NodeListOf<HTMLParagraphElement>}*/ (
      document.querySelectorAll('.error')
    );

    errorCardMessages.forEach(function (errorCardMessage, index) {
      errorCardMessage.textContent = userErrors[index].message;
      errorCardMessage.className = userErrors[index].className;
    });

    userErrors.forEach(function (userError) {
      if (!(userError.message === '' && userError.className === 'error')) {
        throw userErrors;
      }
    });
  }
}

new FormComponent();
