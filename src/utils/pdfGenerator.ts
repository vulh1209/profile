/**
 * PDF Generator Utility
 * Converts current page content to PDF for resume download
 */

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Type definitions
interface PDFOptions {
  scale?: number;
  useCORS?: boolean;
  allowTaint?: boolean;
  backgroundColor?: string;
  logging?: boolean;
  width?: number;
  height?: number;
  scrollX?: number;
  scrollY?: number;
  ignoreElements?: (element: Element) => boolean;
}

interface HiddenElement {
  element: HTMLElement;
  originalDisplay: string;
}

/**
 * Generate PDF from HTML element
 * @param {string} filename - Name of the PDF file
 * @param {HTMLElement} element - Element to convert (default: document.body)
 * @param {Object} options - PDF generation options
 */
export const generatePDF = async (
  filename: string = "Vu_Le_Resume.pdf",
  element: HTMLElement | null = null,
  options: PDFOptions = {}
) => {
  try {
    // Show loading indicator
    const loadingToast = showLoadingToast();

    // Default options
    const defaultOptions: PDFOptions = {
      scale: 2, // Higher quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#000000",
      logging: false,
      width: 1200,
      scrollX: 0,
      scrollY: 0,
    };

    const canvasOptions = { ...defaultOptions, ...options };

    // Get the element to convert
    const targetElement = element || document.body;

    // Temporarily hide elements that shouldn't be in PDF
    const elementsToHide = hideNonPrintableElements();

    // Add PDF-specific styles
    addPDFStyles();

    // Wait for any animations to complete
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Generate canvas from HTML
    console.log("🎨 Generating canvas from HTML...");
    const canvas = await html2canvas(targetElement, canvasOptions);

    // Restore hidden elements
    restoreHiddenElements(elementsToHide);
    removePDFStyles();

    // Calculate PDF dimensions
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    // Create PDF
    console.log("📄 Creating PDF document...");
    const pdf = new jsPDF("p", "mm", "a4");
    let position = 0;

    // Add first page
    pdf.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      0,
      position,
      imgWidth,
      imgHeight
    );
    heightLeft -= pageHeight;

    // Add additional pages if content is longer than one page
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        0,
        position,
        imgWidth,
        imgHeight
      );
      heightLeft -= pageHeight;
    }

    // Add metadata
    pdf.setProperties({
      title: "Vu Le - Full Stack & Smart Contract Developer Resume",
      subject: "Professional Resume",
      author: "Vu Le",
      keywords:
        "Full Stack Developer, Smart Contract Developer, Blockchain, Resume",
      creator: "Portfolio Website",
    });

    // Download the PDF
    console.log("💾 Downloading PDF...");
    pdf.save(filename);

    // Hide loading and show success
    hideLoadingToast(loadingToast);
    showSuccessToast("Resume downloaded successfully!");

    // Track download event (optional)
    trackPDFDownload(filename);
  } catch (error) {
    console.error("❌ Error generating PDF:", error);
    showErrorToast("Failed to generate PDF. Please try again.");
  }
};

/**
 * Generate optimized resume PDF with specific sections
 */
export const generateResumePDF = async () => {
  const filename = `Vu_Le_Resume_${new Date().toISOString().split("T")[0]}.pdf`;

  // Options optimized for resume
  const options: PDFOptions = {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: "#000000",
    logging: false,
    width: 1200,
    scrollX: 0,
    scrollY: 0,
    // Ignore elements outside viewport
    ignoreElements: (element: Element) => {
      return (
        element.classList.contains("no-print") ||
        element.tagName === "SCRIPT" ||
        element.tagName === "STYLE"
      );
    },
  };

  await generatePDF(filename, document.body, options);
};

/**
 * Hide elements that shouldn't appear in PDF
 */
function hideNonPrintableElements(): HiddenElement[] {
  const elementsToHide: HiddenElement[] = [];

  // Hide navigation elements, buttons that aren't needed in PDF
  const selectors = [
    "nav",
    ".no-print",
    "[data-no-print]",
    "button:not(.print-keep)",
    ".scroll-indicator",
    ".loading-spinner",
  ];

  selectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      if (htmlElement.style.display !== "none") {
        elementsToHide.push({
          element: htmlElement,
          originalDisplay: htmlElement.style.display,
        });
        htmlElement.style.display = "none";
      }
    });
  });

  return elementsToHide;
}

/**
 * Restore previously hidden elements
 */
function restoreHiddenElements(elementsToHide: HiddenElement[]): void {
  elementsToHide.forEach(({ element, originalDisplay }) => {
    element.style.display = originalDisplay;
  });
}

/**
 * Add PDF-specific styles
 */
function addPDFStyles() {
  const style = document.createElement("style");
  style.id = "pdf-styles";
  style.textContent = `
    @media print {
      body {
        background: #000 !important;
        color: #fff !important;
      }
      
      .container-max-width {
        max-width: none !important;
        padding: 0 20px !important;
      }
      
      section {
        page-break-inside: avoid;
        margin-bottom: 30px !important;
      }
      
      .no-print {
        display: none !important;
      }
      
      /* Ensure text is readable */
      h1, h2, h3, h4, h5, h6 {
        color: #fff !important;
      }
      
      p, span, div {
        color: #e5e5e5 !important;
      }
      
      /* Fix any layout issues */
      .grid {
        display: block !important;
      }
      
      .grid > * {
        margin-bottom: 20px !important;
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * Remove PDF-specific styles
 */
function removePDFStyles() {
  const style = document.getElementById("pdf-styles");
  if (style) {
    style.remove();
  }
}

/**
 * Show loading toast
 */
function showLoadingToast(): HTMLElement {
  const toast = document.createElement("div");
  toast.id = "pdf-loading-toast";
  toast.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      border: 1px solid #333;
      z-index: 10000;
      display: flex;
      align-items: center;
      gap: 12px;
      backdrop-filter: blur(10px);
    ">
      <div style="
        width: 20px;
        height: 20px;
        border: 2px solid #666;
        border-top: 2px solid #fff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      "></div>
      <span>Generating PDF...</span>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;
  document.body.appendChild(toast);
  return toast;
}

/**
 * Hide loading toast
 */
function hideLoadingToast(toast: HTMLElement | null): void {
  if (toast && toast.parentNode) {
    toast.parentNode.removeChild(toast);
  }
}

/**
 * Show success toast
 */
function showSuccessToast(message: string): void {
  const toast = document.createElement("div");
  toast.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(0, 100, 0, 0.9);
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      border: 1px solid #060;
      z-index: 10000;
      backdrop-filter: blur(10px);
    ">
      ✅ ${message}
    </div>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 3000);
}

/**
 * Show error toast
 */
function showErrorToast(message: string): void {
  const toast = document.createElement("div");
  toast.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(100, 0, 0, 0.9);
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      border: 1px solid #600;
      z-index: 10000;
      backdrop-filter: blur(10px);
    ">
      ❌ ${message}
    </div>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 5000);
}

/**
 * Track PDF download event (optional analytics)
 */
function trackPDFDownload(filename: string): void {
  // Add analytics tracking here if needed
  console.log("📊 PDF Download tracked:", filename);

  // Example: Google Analytics
  // gtag('event', 'download', {
  //   event_category: 'Resume',
  //   event_label: filename
  // });
}
