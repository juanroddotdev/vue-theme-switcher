import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useTheme } from '../composables/useTheme';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    }
  };
})();

// Mock document
const documentMock = {
  documentElement: {
    style: {
      cssText: '',
      setProperty: () => {}
    }
  }
};

// Setup global mocks
vi.stubGlobal('localStorage', localStorageMock);
vi.stubGlobal('document', documentMock);

describe('useTheme', () => {
  beforeEach(() => {
    localStorageMock.clear();
    documentMock.documentElement.style.cssText = '';
  });

  it('should initialize with default theme', () => {
    const { currentTheme } = useTheme();
    expect(currentTheme.value).toBe('sunset');
  });

  it('should change theme when setTheme is called', () => {
    const { currentTheme, setTheme } = useTheme();
    setTheme('forest');
    expect(currentTheme.value).toBe('forest');
    expect(localStorageMock.getItem('selected-theme')).toBe('forest');
  });

  it('should use custom storage key', () => {
    const { setTheme, currentTheme } = useTheme({ storageKey: 'custom-key' });
    setTheme('ocean');
    expect(currentTheme.value).toBe('ocean');
    expect(localStorageMock.getItem('custom-key')).toBe('ocean');
  });

  it('should use custom themes', () => {
    const customThemes = [
      {
        name: 'custom',
        colors: {
          primaryColor: '#000000',
          secondaryColor: '#ffffff',
          accentColor: '#cccccc',
          textColor: '#000000',
          bgColor: '#ffffff'
        }
      }
    ];

    const { themes } = useTheme({ themes: customThemes });
    expect(themes).toEqual(customThemes);
  });
});