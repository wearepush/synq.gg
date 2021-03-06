import React from 'react';
import { Field, Form } from 'react-final-form';
import cx from 'classnames';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import memoize from 'lru-memoize';
import Loader from '../Loader/Loader';
import { createValidator, email, required } from '../../utils/validation';
import './SubscriptionForm.scss';

const validate = memoize(10)(
  createValidator({
    EMAIL: [required, email],
  })
);

const subscriptionGroups = [
  {
    value: 1,
    name: 'intheknow',
  },
  {
    value: 2,
    name: 'strongertogether',
  },
  {
    value: 4,
    name: 'bettogether',
  },
  {
    value: 8,
    name: 'edge',
  },
  {
    value: 16,
    name: 'home',
  },
  {
    value: 32,
    name: 'community',
  },
];

const URL = `https://synq.us6.list-manage.com/subscribe/post?u=97002b477386c8792a14edf1f&id=41b1982d15`;

const Input = ({ name, className, inputClassName, ...rest }) => (
  <Field name={name}>
    {({ input, meta }) => {
      const { active, valid, touched, invalid } = meta;
      return (
        <div className={cx('input-container', className)}>
          <input
            className={cx('input__field', {
              [inputClassName]: !!inputClassName,
              'input__field--valid': valid,
              'input__field--invalid': invalid && touched && !active,
              'input__field--active': active,
            })}
            onChange={input.onChange}
            value={input.value}
            {...rest}
          />
        </div>
      );
    }}
  </Field>
);

const SubscriptionFom = ({ pageKey }) => {
  const groupObj = subscriptionGroups.find(c => c.name === pageKey);
  return (
    <MailchimpSubscribe
      url={URL}
      render={({ subscribe, status, message }) => {
        const isLoading = status === 'sending';
        const isSuccess = status === 'success';
        const isError = status === 'error';
        const shouldAnimate = isSuccess || isError;
        return (
          <Form
            onSubmit={(formData) =>
              subscribe(formData)
            }
            initialValues={{
              'group[20274]': groupObj?.value || null
            }}
            validate={validate}
            subscription={{ submitting: true, pristine: true, errors: true, touched: true }}
            render={({ handleSubmit, submitting, pristine, errors, touched }) => {
              const isFiledError = errors && errors.EMAIL && touched.EMAIL;

              return (
                <div className="subscription">
                  <div className="subscription__inner-wrapper">
                    <div className="subscription__form">
                      <Input name="EMAIL" placeholder="Enter your e-mail" />
                      <button
                        disabled={submitting || pristine || isLoading}
                        onClick={handleSubmit}
                        className={cx('subscription__button', {
                          'subscription__button--success': isSuccess,
                          'subscription__button--error': isError,
                        })}
                        type="submit"
                      >
                        {isLoading ? (
                          <Loader className="subscription__loader" />
                        ) : (
                          'Join the waitlist'
                        )}
                      </button>
                      <div
                        className={cx('subscription__success-line', {
                          animate: shouldAnimate,
                          'subscription__success-line--success': isSuccess,
                          'subscription__success-line--error': isError,
                        })}
                      />
                      <div
                        className={cx('subscription__info', {
                          animate: shouldAnimate,
                          'subscription__info--success': isSuccess,
                          'subscription__info--error': isError,
                        })}
                      >
                        {isSuccess ? (
                          <span className="subscription__success-text">
                            <span
                              aria-label="celebrate
                            "
                              role="img"
                            >
                              &#127881;
                            </span>{' '}
                            <span>Subscribed successfully</span>
                          </span>
                        ) : (
                          <span
                            className="subscription__error-text"
                            dangerouslySetInnerHTML={{ __html: message }}
                          />
                        )}
                      </div>
                    </div>
                    {isFiledError && (
                      <div className="subscription__input-field-error">{errors.EMAIL}</div>
                    )}
                  </div>
                </div>
              );
            }}
          />
        );
      }}
    />
  );
};

export default SubscriptionFom;
