import React from "react";
import classes from "./FormCard.module.css";
import { useForm } from "react-hook-form";

const FormCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  // console.log(errors);
  return (
    <div className={classes.FormCard}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.FormDetails}>
          <div className={classes.FormInput}>
            <input
              type="text"
              placeholder="First name.."
              {...register("First name", { required: true, maxLength: 80 })}
              className={classes.FormInput}
            />
          </div>
          <div className={classes.FormInput}>
            <input
              type="text"
              placeholder="Last Name.."
              {...register("Last Name", {})}
            />
          </div>
        </div>
        <div className={classes.FormDetails}>
          <div className={classes.FormSubmit}>
            <div>
              <input
                type="email"
                placeholder="Enter your email address..."
                {...register("Email Address", {})}
                className={classes.FormSubmitInput}
              />
            </div>
            <div>
              <button type="submit" className={classes.FormSubmitButton}>
                {" "}
                Join our waiting list
              </button>
            </div>
          </div>
        </div>
        <div className={classes.FormBubble}></div>
      </form>
    </div>
  );
};

export default FormCard;
