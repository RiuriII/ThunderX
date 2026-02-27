import { Phone, Mail, MapPin } from "lucide-react";
const Footer = () => {
    return (
        <footer className="from-background bg-linear-to-b to-[#0e0908] py-12 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 grid gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                            Thunder<span className="text-primary">X</span>
                        </h3>

                        <p className="text-sm">
                            Potência e tecnologia em perfeita harmonia para
                            proporcionar a melhor experiência sobre duas rodas.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold text-white">Sobre</h4>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    Nossa História
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    Tecnologia
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    Sustentabilidade
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    Carreira
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold text-white">
                            Suporte
                        </h4>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    FAQ
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    Garantia
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    Manutenção
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-accent transition-colors"
                                >
                                    Revendedores
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold text-white">
                            Contato
                        </h4>

                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone size={16} />

                                <span>+55 (11) 9999-9999</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Mail size={16} />

                                <span>contato@thunderx.com</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <MapPin size={16} />

                                <span>São Paulo, SP</span>
                            </li>
                        </ul>

                        <div className="mt-4 flex gap-4">
                            <a
                                href="#"
                                className="hover:text-accent transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-instagram-icon lucide-instagram"
                                >
                                    <rect
                                        width="20"
                                        height="20"
                                        x="2"
                                        y="2"
                                        rx="5"
                                        ry="5"
                                    />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line
                                        x1="17.5"
                                        x2="17.51"
                                        y1="6.5"
                                        y2="6.5"
                                    />
                                </svg>
                            </a>

                            <a
                                href="#"
                                className="hover:text-accent transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-facebook-icon lucide-facebook"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>

                            <a
                                href="#"
                                className="hover:text-accent transition-colors"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 1200 1227"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white pt-8 text-center text-sm">
                    <p>
                        &copy; 2026 ThunderX Motorcycles. Todos os direitos
                        reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
