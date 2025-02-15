import { GameNode, WindowEventNode } from "@gaiaengine/2d";

interface Zone {
  x: number;
  y: number;
}

export default class ZoneManager extends GameNode {
  private zoneWidth!: number;
  private zoneHeight!: number;

  private currentZoneX: number;
  private currentZoneY: number;

  private eventNode = new WindowEventNode();
  private zones: Map<string, Zone> = new Map();

  constructor(initialPlayerX: number, initialPlayerY: number) {
    super();

    this.append(this.eventNode);
    this.handleResize();
    this.eventNode.onWindow("resize", this.handleResize);

    this.currentZoneX = Math.floor(initialPlayerX / this.zoneWidth);
    this.currentZoneY = Math.floor(initialPlayerY / this.zoneHeight);

    this.loadZones();
  }

  private handleResize = () => {
    this.zoneWidth = window.innerWidth;
    this.zoneHeight = window.innerHeight;
  };

  private getZoneKey(x: number, y: number): string {
    return `${x},${y}`;
  }

  private loadZones(): void {
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const zoneX = this.currentZoneX + dx;
        const zoneY = this.currentZoneY + dy;
        const key = this.getZoneKey(zoneX, zoneY);
        if (!this.zones.has(key)) {
          this.zones.set(key, { x: zoneX, y: zoneY });
          console.log(`Zone ${key} loaded.`);
        }
      }
    }
  }
}
