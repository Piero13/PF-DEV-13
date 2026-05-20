import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { motion } from "framer-motion";
import { fadeUp } from "../../../animations/fade";

import styles from "./ContactInfos.module.scss";

export default function ContactInfos() {
    return (
            <div>
                <motion.div               
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                >
                    <aside className={styles.card}>
                        <div className={styles.infos}>
                            <div>
                                <Mail size={20} />
                                <a href="mailto:pf.devweb13@gmail.com">pf.devweb13@email.com</a>
                            </div>

                            <div>
                                <Phone size={20} />
                                <a href="tel:+33651853051">06 51 85 30 51</a>
                            </div>

                            <div>
                                <MapPin size={20} />
                                <span>Marseille 13012 - France</span>
                            </div>
                        </div>
                    </aside>
                </motion.div>
            </div>
    );
}