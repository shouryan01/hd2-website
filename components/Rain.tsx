import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

interface SymbolProps {
  p: p5;
  x: number;
  y: number;
  speed: number;
  symbolSize: number;
  first: boolean;
}

interface StreamProps {
  p: p5;
}

const Rain: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let streams: Stream[] = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(0);

        const xSpacing = p.width /60;
        for (let i=0; i < p.width / xSpacing; i++) {
          const stream = new Stream({p}, xSpacing * i, p.random(-1000, 0));
          stream.generateSymbols(xSpacing * i, p.random(-1000, 0));
          streams.push(stream);
        }
      };

      p.draw = () => {
        p.background(0, 150);
        streams.forEach(stream => stream.render());
      };
    };

    class Symbol {
      p: p5;
      x: number;
      y: number;
      value: string;
      speed: number;
      first: boolean;
      symbolSize: number;
      switchInterval: number;


      constructor({p, x, y, speed, symbolSize, first}: SymbolProps) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.value = '';
        this.speed = speed;
        this.symbolSize = symbolSize;
        this.first = first;
        this.switchInterval = p.round(p.random(2, 25));
      }

      setToRandomSymbol() {
        if (this.p.frameCount % this.switchInterval === 0) {
          this.value = String.fromCharCode(0x30A0 + this.p.round(this.p.random(0, 96)));
        }
      }

      rain() {
        this.y = this.y >= this.p.height ? 0 : this.y + this.speed;
      }
    }

    class Stream {
      p: p5;
      symbols: Symbol[];
      totalSymbols: number;
      speed: number;
      color: number[];
      symbolSize: number;

      constructor({p}: StreamProps, x: number, y: number) {
        this.p = p;
        this.symbols = [];
        this.totalSymbols = p.round(p.random(5, 35));
        this.speed = p.random(2, 5);
        this.color = p.random(0, 1) > 0.5 ? [0, 219, 219] : [152, 13, 12];
        this.symbolSize = 16;

        for (let i = 0; i <= this.totalSymbols; i++) {
          const symbol = new Symbol({ p, x, y, speed: this.speed, symbolSize: this.symbolSize, first: i === 0 });
          symbol.setToRandomSymbol();
          this.symbols.push(symbol);
          y -= this.symbolSize;
        }

      }

      generateSymbols(x: number, y: number) {
        let first = true;
        for (let i=0; i <= this.totalSymbols; i++) {
          const symbol = new Symbol({p: this.p, x, y, speed: this.speed, symbolSize: this.symbolSize, first});
          symbol.setToRandomSymbol();
          this.symbols.push(symbol);
          y -= this.p.textSize();
          first = false;
        }
      }

      render() {
        this.symbols.forEach((symbol, index) => {
          const isFirst = index === 0;
          const lightness = isFirst ? 255 : 200;
      
          this.p.fill(...this.color, lightness);
          this.p.text(symbol.value, symbol.x, symbol.y);
          symbol.rain();
          symbol.setToRandomSymbol();
        });
      }
      
    }

    if (canvasRef.current) {
      new p5(sketch, canvasRef.current);
    }
  }, []);

  return <div ref={canvasRef} />;
};

export default Rain;
