import { useState } from "react";
import { useForm } from "react-hook-form";

const PRODUCTS = [
    "Samsung Galaxy S23",
    "iPhone 15",
    "MacBook Air",
    "Sony PlayStation 5"
];

const DELIVERY_METHODS = [
    "Нова Пошта",
    "Кур'єр",
    "Самовивіз"
];

function OrderForm() {
    const [result, setResult] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            product: "",
            quantity: 1,
            delivery: "Нова Пошта"
        },
        mode: "onChange"
    });

    const onSubmit = async (data) => {
        // імітація запиту на сервер
        await new Promise((resolve) => {
            setTimeout(resolve, 1500);
        });

        setResult({
            success: true,
            message: "Замовлення успішно створено!",
            order: data
        });
    };

    return (
        <div className="order-container">

            <h1>🛒 TechMarket</h1>

            <h2>Оформлення замовлення</h2>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <div className="form-group">
                    <label htmlFor="name">
                        ПІБ
                    </label>

                    <input
                        id="name"
                        type="text"
                        placeholder="Введіть ваше ім'я"
                        disabled={isSubmitting}
                        {...register("name", {
                            required: "Введіть ПІБ",
                            minLength: {
                                value: 3,
                                message: "ПІБ має містити мінімум 3 символи"
                            },
                            maxLength: {
                                value: 60,
                                message: "ПІБ не повинно перевищувати 60 символів"
                            }
                        })}
                    />
                    {errors.name && (
                        <span className="form-error">{errors.name.message}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="phone">
                        Телефон
                    </label>

                    <input
                        id="phone"
                        type="tel"
                        placeholder="+380..."
                        disabled={isSubmitting}
                        {...register("phone", {
                            required: "Введіть номер телефону",
                            pattern: {
                                value: /^\+?\d[\d\s-]{9,}$/,
                                message: "Некоректний формат телефону"
                            }
                        })}
                    />
                    {errors.phone && (
                        <span className="form-error">{errors.phone.message}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        E-mail
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="example@gmail.com"
                        disabled={isSubmitting}
                        {...register("email", {
                            required: "Введіть e-mail",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Некоректний формат e-mail"
                            }
                        })}
                    />
                    {errors.email && (
                        <span className="form-error">{errors.email.message}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="product">
                        Товар
                    </label>

                    <select
                        id="product"
                        disabled={isSubmitting}
                        {...register("product", {
                            required: "Оберіть товар"
                        })}
                    >
                        <option value="">
                            Оберіть товар
                        </option>

                        {PRODUCTS.map((product) => (
                            <option key={product} value={product}>
                                {product}
                            </option>
                        ))}
                    </select>
                    {errors.product && (
                        <span className="form-error">{errors.product.message}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="quantity">
                        Кількість
                    </label>

                    <input
                        id="quantity"
                        type="number"
                        disabled={isSubmitting}
                        {...register("quantity", {
                            required: "Вкажіть кількість",
                            valueAsNumber: true,
                            min: {
                                value: 1,
                                message: "Кількість не може бути меншою за 1"
                            },
                            max: {
                                value: 20,
                                message: "Кількість не повинна перевищувати 20"
                            }
                        })}
                    />
                    {errors.quantity && (
                        <span className="form-error">{errors.quantity.message}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="delivery">
                        Спосіб доставки
                    </label>

                    <select
                        id="delivery"
                        disabled={isSubmitting}
                        {...register("delivery", {
                            required: "Оберіть спосіб доставки"
                        })}
                    >
                        {DELIVERY_METHODS.map((method) => (
                            <option key={method} value={method}>
                                {method}
                            </option>
                        ))}
                    </select>
                    {errors.delivery && (
                        <span className="form-error">{errors.delivery.message}</span>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting
                        ? "Обробка замовлення..."
                        : "Створити замовлення"}
                </button>

            </form>

            {result && (
                <div
                    className={
                        result.success
                            ? "result success"
                            : "result error"
                    }
                >
                    <h3>
                        {result.success
                            ? "✅ Успішно!"
                            : "❌ Помилка"}
                    </h3>

                    <p>{result.message}</p>

                    {result.success && (
                        <div className="order-result">
                            <p>
                                <b>Покупець:</b>{" "}
                                {result.order.name}
                            </p>

                            <p>
                                <b>Товар:</b>{" "}
                                {result.order.product}
                            </p>

                            <p>
                                <b>Кількість:</b>{" "}
                                {result.order.quantity}
                            </p>

                            <p>
                                <b>Доставка:</b>{" "}
                                {result.order.delivery}
                            </p>
                        </div>
                    )}
                </div>
            )}

        </div>
    );
}

export default OrderForm;