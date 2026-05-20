import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { fadeUp } from "../../../animations/fade";

import styles from "./ContactForm.module.scss";

export default function ContactForm() {
    const form = useRef();
    const timeoutRef = useRef(null);
    
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(false);
            setSuccess(false);

            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSuccess(true);

            form.current.reset();
        } catch (error) {
            console.error(error);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (success) {
            timeoutRef.current = setTimeout(() => {
            setSuccess(false);
            }, 5000);
        }

        return () => clearTimeout(timeoutRef.current);
    }, [success]);

    useEffect(() => {
        if (error) {
            timeoutRef.current = setTimeout(() => {
            setError(false);
            }, 5000);
        }

        return () => clearTimeout(timeoutRef.current);
    }, [error]);

    return (
        <div>
            <motion.div
                className={styles.card}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className={styles.form}
                >
                    <Input
                        label="Nom"
                        name="user_name"
                        placeholder="Votre nom"
                        required
                    />

                    <Input
                        label="Email"
                        type="email"
                        name="user_email"
                        placeholder="Votre email"
                        required
                    />

                    <Input
                        label="Subject"
                        name="subject"
                        placeholder="Objet du message"
                        required
                    />

                    <Input
                        label="Message"
                        name="message"
                        placeholder="Parlez-moi de votre projet..."
                        textarea
                        required
                    />

                    <input
                        type="text"
                        name="honeypot"
                        tabIndex="-1"
                        autoComplete="off"
                        className={styles.honeypot}
                    />

                    <div className={styles.button}>
                        <Button variant="primary" type="submit">
                            {loading
                            ? "Envoi..."
                            : "Envoyer le message"}
                        </Button>
                    </div>
                    

                    <AnimatePresence mode="wait">
                        {success && (
                            <motion.p
                            className={styles.success}
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -10,
                            }}
                            >
                            Message envoyé avec succès.
                            </motion.p>
                        )}

                        {error && (
                            <motion.p
                            className={styles.error}
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -10,
                            }}
                            >
                            Une erreur est survenue.
                            </motion.p>
                        )}
                    </AnimatePresence>               
                </form>
            </motion.div>
        </div>
    );
}