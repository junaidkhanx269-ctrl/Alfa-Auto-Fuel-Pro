// Web Audio API synthesizer for Alfa Auto Fuel audio effects
// Safe, no external files required, zero latency

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Fuel pump nozzle click & pump motor hum
 */
export function playFuelPumpSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // 1. Heavy mechanical nozzle clunk
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(110, now);
    osc1.frequency.exponentialRampToValueAtTime(45, now + 0.12);
    gain1.gain.setValueAtTime(0.3, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.15);

    // 2. Pump motor start hum
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(80, now + 0.1);
    osc2.frequency.linearRampToValueAtTime(120, now + 0.4);
    gain2.gain.setValueAtTime(0.001, now);
    gain2.gain.linearRampToValueAtTime(0.15, now + 0.2);
    gain2.gain.linearRampToValueAtTime(0.001, now + 0.6);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.1);
    osc2.stop(now + 0.65);

    // 3. Gallon meter mechanical tick
    for (let i = 0; i < 4; i++) {
      const tickOsc = ctx.createOscillator();
      const tickGain = ctx.createGain();
      const t = now + 0.25 + i * 0.09;
      tickOsc.type = 'square';
      tickOsc.frequency.setValueAtTime(900 + i * 100, t);
      tickGain.gain.setValueAtTime(0.08, t);
      tickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);
      tickOsc.connect(tickGain);
      tickGain.connect(ctx.destination);
      tickOsc.start(t);
      tickOsc.stop(t + 0.04);
    }
  } catch (e) {
    console.debug('Audio not allowed yet:', e);
  }
}

/**
 * Cash register "Cha-Ching!" sound
 */
export function playCashRegisterSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Drawer slam / mechanical latch
    const oscNoise = ctx.createOscillator();
    const gainNoise = ctx.createGain();
    oscNoise.type = 'triangle';
    oscNoise.frequency.setValueAtTime(140, now);
    oscNoise.frequency.exponentialRampToValueAtTime(50, now + 0.08);
    gainNoise.gain.setValueAtTime(0.2, now);
    gainNoise.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
    oscNoise.connect(gainNoise);
    gainNoise.connect(ctx.destination);
    oscNoise.start(now);
    oscNoise.stop(now + 0.1);

    // Bell chime 1 (High crisp metallic ring)
    const bell1 = ctx.createOscillator();
    const bellGain1 = ctx.createGain();
    bell1.type = 'sine';
    bell1.frequency.setValueAtTime(1567.98, now + 0.05); // G6
    bellGain1.gain.setValueAtTime(0.25, now + 0.05);
    bellGain1.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
    bell1.connect(bellGain1);
    bellGain1.connect(ctx.destination);
    bell1.start(now + 0.05);
    bell1.stop(now + 0.75);

    // Bell chime 2 (Major third overtone B6)
    const bell2 = ctx.createOscillator();
    const bellGain2 = ctx.createGain();
    bell2.type = 'sine';
    bell2.frequency.setValueAtTime(1975.53, now + 0.08); // B6
    bellGain2.gain.setValueAtTime(0.2, now + 0.08);
    bellGain2.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
    bell2.connect(bellGain2);
    bellGain2.connect(ctx.destination);
    bell2.start(now + 0.08);
    bell2.stop(now + 0.95);
  } catch (e) {
    console.debug('Audio error:', e);
  }
}

/**
 * Lead notification ping
 */
export function playNotificationPing() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1320, now + 0.08);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.26);
  } catch (e) {
    console.debug('Audio error:', e);
  }
}
