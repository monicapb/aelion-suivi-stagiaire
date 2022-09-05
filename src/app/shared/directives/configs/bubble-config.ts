export class BubbleConfig {
    public height?: string = '2em';
    public width?: string = '2em';
    public lineHeight?: string = '2em';
    public verticalAlign?: string = 'middle';
    public textAlign?: string = 'center';
    public fontWeight?: string = 'bold';
    public borderRadius?: string = '50%';
    public backgroundColor?: string = 'rgba(127, 127, 127, .7)';
    public color?: string = '#000';

    public deserialize(config: any): BubbleConfig {
        Object.assign(this, config);
        return this;
    }
}
