import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Button from "./Button"
import Error from "../Svg/Error"
import { useState } from "react"

const Form = () => {
  const [successfullSubmit, setSuccessfullSubmit] = useState(false)

  const contacData = z.object({
    name: z.string().min(1, "Can't' be empty"),
    email: z.string().min(1, "Can't' be empty").email(),
    phone: z.string().min(4, "Phone is required"),
    message: z.string().min(1, "Can't be empty"),
  })

  type TContactData = z.infer<typeof contacData>

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TContactData>({
    resolver: zodResolver(contacData),
  })

  async function onSubmit(e: TContactData) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSuccessfullSubmit(true)
    reset()
  }

  const inputStyle = `bg-transparent w-full placeholder:text-gray-300 border-b-2 border-gray-light p-2.5 text-white  focus:outline-none`

  return (
    <form
      className="lg:pl-16 flex flex-col gap-5 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative">
        <input
          type="text"
          {...register("name")}
          placeholder="Name"
          className={inputStyle}
        />
        {errors.name && (
          <div className="text-white absolute flex gap-2 items-center right-0 top-[50%] translate-y-[-50%]">
            <span>{`${errors.name.message}`}</span>
            <Error />
          </div>
        )}
      </div>
      <div className="relative">
        <input
          type="email"
          {...register("email")}
          placeholder="Email Address"
          className={inputStyle}
        />
        {errors.email && (
          <div className="text-white absolute flex gap-2 items-center right-0 top-[50%] translate-y-[-50%]">
            <span>{`${errors.email.message}`}</span>
            <Error />
          </div>
        )}
      </div>
      <div className="relative">
        <input
          type="text"
          {...register("phone")}
          placeholder="Phone"
          className={inputStyle}
        />
        {errors.phone && (
          <div className="text-white absolute flex gap-2 items-center right-0 top-[50%] translate-y-[-50%]">
            <span>{`${errors.phone.message}`}</span>
            <Error />
          </div>
        )}
      </div>
      <div className="relative">
        <textarea
          rows={3}
          {...register("message")}
          placeholder="Your Message"
          className={`${inputStyle}`}
        />
        {errors.message && (
          <div className="text-white absolute flex gap-2 items-center right-0 pt-2.5 top-0 ">
            <span>{`${errors.message.message}`}</span>
            <Error />
          </div>
        )}
      </div>

      <div className="flex gap-4 lg:gap-0 flex-col lg:flex-row lg:justify-between justify-center items-center text-gray-light">
        <Button
          disabled={isSubmitting}
          text={isSubmitting ? "Submitting" : "Submit"}
          big
        ></Button>
        {successfullSubmit && <span>{"Submitted Successfully!"}</span>}
      </div>
    </form>
  )
}

export default Form
