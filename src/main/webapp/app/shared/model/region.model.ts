export interface IRegion {
  id?: number;
  regionName?: string;
  secondName?: string;
}

export class Region implements IRegion {
  constructor(public id?: number, public regionName?: string, public secondName?: string) {}
}
