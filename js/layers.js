// Layer data for the brickwork training
const layers = [
    {
        title: "Ground Preparation",
        description: "The first stage of building is preparing the ground. All vegetation, topsoil, and unstable ground must be removed down to firm ground.",
        learning: "Site assessment, levelling, compaction, and drainage requirements.",
        depth: "0.5m",
        material: "Earth",
        materialsUsed: [
            "🧱 Earth & Subsoil - Compact firm ground"
        ],
        safety: "Always check for underground services before excavation. Call 811 to have services marked out.",
        objects: ["ground"]
    },
    {
        title: "Concrete Foundations",
        description: "A concrete pad foundation distributes the building load across the soil. This must be constructed on firm, level ground. Typically C20 or C25 strength.",
        learning: "Foundation design, concrete mixing, pouring, and curing. Load distribution calculations. Minimum depth based on soil conditions.",
        depth: "1.0m",
        material: "Concrete (C20 or C25)",
        materialsUsed: [
            "🏗️ Concrete - Strength C20+",
            "⚪ Concrete aggregate - sand and gravel",
            "🧂 Cement - Portland cement"
        ],
        safety: "Concrete is caustic. Wear protective gloves and eyewear. Never pour on soft ground. Allow 28 days for curing before loading.",
        objects: ["ground", "concrete"]
    },
    {
        title: "DPC & First Brick Course",
        description: "Damp Proof Course (DPC) prevents ground moisture rising into the brickwork. The first course of bricks sits on the DPC, laid to level and plumb.",
        learning: "DPC materials (polythene, bitumen), brick selection, mortar composition, horizontal level checking, bond selection.",
        depth: "0.1m (DPC) + 0.075m (brick)",
        material: "Polythene/Bitumen + Clay Bricks",
        materialsUsed: [
            "🧊 DPC Material - 150-200 micron polythene",
            "🧱 Clay Bricks - 102.5 x 215 x 65mm (standard)",
            "🧂 Mortar - 1:3 cement:sand ratio",
            "📐 Straight edge and spirit level"
        ],
        safety: "Ensure bricks are dry before laying. Check level continuously. Use scaffolding for work above 1.5m.",
        objects: ["ground", "concrete", "dpc", "brick1"]
    },
    {
        title: "Cavity Wall Build - Inner Leaf",
        description: "A cavity wall has two leaves separated by a gap (usually 100-150mm). The inner leaf is built first using stretcher bond pattern.",
        learning: "Cavity width standards (100-150mm), brick bonds (stretcher, header, English), mortar joints (10mm nominal), wall ties placement every 450mm vertically and 900mm horizontally.",
        depth: "0.325m (3.5m brick + 100mm cavity)",
        material: "Clay/Concrete Bricks + Mortar",
        materialsUsed: [
            "🧱 Inner Leaf Bricks - standard clay bricks",
            "🧂 Mortar - consistent strength and workability",
            "📌 Wall Ties - galvanised steel, cavity ties",
            "🎯 Insulation - optional mineral wool batts (100-125mm)"
        ],
        safety: "Use proper scaffolding and platform. Check plumb frequently with a spirit level and plumb bob. Tie in to existing structure.",
        objects: ["ground", "concrete", "dpc", "brick1", "cavity_inner"]
    },
    {
        title: "First Lift Complete (1.2m height)",
        description: "The first lift is typically 1.2m high (approximately 14 courses of bricks). Both leaves are built to the same height with the cavity maintained throughout.",
        learning: "Maintaining cavity width, consistent bond patterns, mortar consistency, gauge boxes, straight edges, vertical plumb checking.",
        depth: "1.2m cumulative",
        material: "Bricks & Mortar",
        materialsUsed: [
            "🧱 Outer & Inner Leaf Bricks - quality selected",
            "🧂 Mortar - lime/cement mix for good bond",
            "📌 Wall Ties - every course offset pattern",
            "🎯 Insulation - partial fill or full fill cavity"
        ],
        safety: "Scaffold must be level and secure with toe boards. Use harnesses above 2m. Guard rails required on all platforms.",
        objects: ["ground", "concrete", "dpc", "brick1", "cavity_inner", "cavity_outer", "lift1"]
    },
    {
        title: "Wall Complete to Eaves",
        description: "Walls continue upward to meet the roof structure at eaves level (typically 3.5-4m). This demonstrates sustained quality and pattern consistency throughout.",
        learning: "Multiple lifts, vertical bond continuity, brick selection for colour/texture, special bricks for corners and edges, dpc placement at roof level.",
        depth: "3.5m typical",
        material: "Bricks & Mortar",
        materialsUsed: [
            "🧱 Quality Selected Bricks - consistent colour",
            "🧂 Mortar - consistent strength throughout",
            "📌 Wall Ties - regular pattern",
            "🧊 Cavity Trays - at roof line"
        ],
        safety: "Tie in scaffold regularly. Inspect for plumb and level. Check for mortar consistency. Use fall protection equipment.",
        objects: ["ground", "concrete", "dpc", "walls_complete"]
    },
    {
        title: "Roof Structure",
        description: "Timber roof structure sits on top of the completed walls. This demonstrates load-bearing transition from brickwork to timber and final building envelope.",
        learning: "Roof loads, timber selection and sizing, bearing surfaces, roof pitch, internal bracing, tile/slate selection.",
        depth: "Varies by design - typical 35-45 degree pitch",
        material: "Timber Rafters + Brickwork + Tiles",
        materialsUsed: [
            "🪵 Timber Rafters - sawn or treated softwood",
            "🪚 Metal Fixings - joist hangers, roof bolts",
            "🧱 Final brick course - tied to roof structure",
            "🏠 Roof tiles/slates - clay or concrete tiles"
        ],
        safety: "Working at height. Ensure proper roof bracing before walking on rafters. Use safety harnesses. Check all fixings.",
        objects: ["ground", "concrete", "dpc", "walls_complete", "roof"]
    }
];