"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";



export default function Navbar() {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);


		return (
			<header ref={ref}>
				<div
					className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
						}`}
				>
					<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
						<div className="flex justify-between gap-8">
							<Link
								href="/about"
								className="duration-200 text-white hover:text-zinc-400 p-2"
							>
								About
							</Link>

							<Link
								href="/portfolio"
								className="duration-200 text-white hover:text-zinc-800 border-violet-600 border-2 hover:bg-violet-200 focus:bg-violet-200 focus:text-zinc-800 rounded-lg p-2"
							>
								Portfolio
							</Link>
						</div>

						<Link
							href="/"
							className="duration-200 text-zinc-300 hover:text-zinc-100"
						>
							{/* if its not a home page, display the arrow, else dont */}
							<ArrowLeft className="w-6 h-6 " />
						</Link>
					</div>
				</div>
			</header>
		);
	
	
};