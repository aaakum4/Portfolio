export type Project = {
	id: string;
	title: string;
	tagline: string;
	description: string;
	category: "software" | "pcb" | "timber" | "welding" | "other";
	thumbnail: string;
	images?: string[];
	tags: string[];
	link?: string;
};

// Edit this list only to change which projects appear in the hero section.
export const featuredIds: string[] = [
	"project-control-room",
	"project-signal-board",
	"project-workbench-frame"
];

export const projects: Project[] = [
	{
		id: "project-control-room",
		title: "Control Room Console",
		tagline: "A telemetry dashboard built for noisy real-world data.",
		description:
			"Placeholder project focused on real-time sensor streams, custom alerts, and resilient edge synchronization.",
		category: "software",
		thumbnail: "/projects/control-room/thumb.jpg",
		images: [
			"/projects/control-room/01.jpg",
			"/projects/control-room/02.jpg"
		],
		tags: ["TypeScript", "Astro", "Telemetry", "Realtime"],
		link: "https://example.com/control-room"
	},
	{
		id: "project-signal-board",
		title: "Signal Conditioning PCB",
		tagline: "A compact board for filtering and scaling analog inputs.",
		description:
			"Placeholder electronics project with multi-stage filtering, ESD protection, and modular terminal integration.",
		category: "pcb",
		thumbnail: "/projects/signal-board/thumb.jpg",
		images: ["/projects/signal-board/01.jpg"],
		tags: ["KiCad", "Analog", "Prototyping"],
		link: "https://example.com/signal-board"
	},
	{
		id: "project-workbench-frame",
		title: "Modular Workbench Frame",
		tagline: "A welded steel base designed for adaptable workshop setups.",
		description:
			"Placeholder fabrication project balancing rigidity, assembly speed, and customizable accessory mounts.",
		category: "welding",
		thumbnail: "/projects/workbench-frame/thumb.jpg",
		images: [
			"/projects/workbench-frame/01.jpg",
			"/projects/workbench-frame/02.jpg"
		],
		tags: ["MIG", "Steel", "Shop Build"],
		link: "https://example.com/workbench-frame"
	},
	{
		id: "project-cabinet-jig",
		title: "Cabinet Joinery Jig",
		tagline: "Repeatable cut alignment for fast panel assembly.",
		description:
			"Placeholder timber project for accurate joinery with adjustable guides and quick clamp interfaces.",
		category: "timber",
		thumbnail: "/projects/cabinet-jig/thumb.jpg",
		tags: ["Birch Ply", "Jig", "CNC"],
		link: "https://example.com/cabinet-jig"
	},
	{
		id: "project-garden-lighting",
		title: "Low-Voltage Garden Lighting",
		tagline: "Durable outdoor lighting loops with simple control.",
		description:
			"Placeholder mixed-discipline project integrating weatherproof fixtures, route planning, and service access.",
		category: "other",
		thumbnail: "/projects/garden-lighting/thumb.jpg",
		tags: ["Outdoor", "Electrical", "Installation"]
	},
	{
		id: "project-inventory-app",
		title: "Workshop Inventory App",
		tagline: "Track parts and consumables before they run out.",
		description:
			"Placeholder software project for barcode lookup, threshold alerts, and purchase history tracking.",
		category: "software",
		thumbnail: "/projects/inventory-app/thumb.jpg",
		tags: ["Node", "SQLite", "PWA"],
		link: "https://example.com/inventory-app"
	}
];

const projectsById: Record<string, Project> = projects.reduce(
	(acc, project) => {
		acc[project.id] = project;
		return acc;
	},
	{} as Record<string, Project>
);

export const featuredProjects: Project[] = featuredIds
	.map((id) => projectsById[id])
	.filter((project): project is Project => Boolean(project));

export const gridProjects: Project[] = projects.filter(
	(project) => featuredIds.indexOf(project.id) === -1
);
